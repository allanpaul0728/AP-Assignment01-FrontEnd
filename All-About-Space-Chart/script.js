const SPACEDATA_URL="launch-data.json";

async function loadData() {
    let response = await axios.get(SPACEDATA_URL);
    return response.data;
}