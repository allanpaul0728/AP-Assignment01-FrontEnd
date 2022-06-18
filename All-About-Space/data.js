const SPACEDEVAPI_URL = "launch-data.js";


async function getTopList() {
    response = await axios.get(`${SPACEDEVAPI_URL}/coins/markets`, {
        params: { 
            
    });
    return response.data;
}