// const DATA_URL = "https://carbon-interface.s3.ca-central-1.amazonaws.com/assets/Carbon+Interface.postman_collection.json";
// const API_KEY = "wwsvjcS8KK1dgtH5euuBPw";
// async function loadData() {
//     let response = await axios.get(DATA_URL);
//     return response.data;
// }

let options = {
    'chart': {
        'type':'pie',
        'height': '100%'
    },
    'series': [],
    'noData':{
        'text':'Loading'
    }
}

let chart = new ApexCharts(
    document.querySelector('#chart'),
    options
);

chart.render();

window.addEventListener('DOMContentLoaded', async function(){
    let data = await loadData();
    let series = transformData(data);
    chart.updateSeries([
        {
            'name':'Revenue',
            'data': series
        }
    ])
}) 