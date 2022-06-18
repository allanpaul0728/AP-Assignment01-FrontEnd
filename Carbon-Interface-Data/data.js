const SPACEDEVAPI_URL = "https://api.coingecko.com/api/v3";

//get a list of top 50 coins and their associated data and returns the data
async function getTopList() {
    response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
        params: { vs_currency: "usd", order: "market_cap_desc", per_page: "20", page: "1", sparkline: "true", price_change_percentage: "1h,24h,7d" },
    });
    return response.data;
}

//get only the price data of a choosen coin
async function getPriceData(coin_id, days) {
    response = await axios.get(`${COINGECKO_API_URL}/coins/${coin_id}/market_chart`, {
        params: { vs_currency: "usd", days: days, interval: "hourly" },
    });
    return response.data;
}

//get the candle data of a choosen coin
async function getCandleData(coin_id, days) {
    console.log("getcandledata", coin_id)
    response = await axios.get(`${COINGECKO_API_URL}/coins/${coin_id}/ohlc`, {
        params: { vs_currency: "usd", days: days },
    });
    return response.data;
}

//process the candle data into a apexchart readable form
function processCandleData(data) {
    let processedData = [];
    for (entry of data) {
        let processedEntry = {};
        processedEntry["x"] = new Date(entry[0]);
        processedEntry["y"] = entry.slice(1);
        processedData.push(processedEntry);
    }

    return processedData;
}