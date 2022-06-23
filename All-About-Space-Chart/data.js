const SPACEDEVAPI_URL = "launch-data.json";

function condition(data) {
    return data["type"] === "commercial";
}

async function testing() {
    let response = await axios.get(SPACEDEVAPI_URL);

    let data = response.data;

    let filterData = data.filter(condition);

    console.log(filterData);
}

testing();