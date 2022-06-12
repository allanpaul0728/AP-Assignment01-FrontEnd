const DATA_URL = "https://carbon-interface.s3.ca-central-1.amazonaws.com/assets/Carbon+Interface.postman_collection.json";
const API_KEY = "wwsvjcS8KK1dgtH5euuBPw";
async function loadData() {
    let response = await axios.get(DATA_URL);
    return response.data;
}