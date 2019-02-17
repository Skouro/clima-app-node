const axios = require('axios');
const getClima = async (lat, lng) => {
    let url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=179f93e12e0b22fa463e603c388ede16&units=metric`;
    let temperature = await axios.get(url).then(value => value).catch(reason =>  new Error(reason));
    return temperature.data['main']['temp'];
};
module.exports = {
    getClima
};
