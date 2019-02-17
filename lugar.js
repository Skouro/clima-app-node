const axios = require('axios');
const getLocation = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}a&key=AIzaSyCcTVe6sMPeTnM9cJRbQAEZr6cgLJty2-E`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se ha encontrado ningún resultado para la ciudad ${direccion}`);
    }
    let location = resp.data['results'][0]['formatted_address'];
    let coords = resp.data['results'][0]['geometry']['location'];
    return {
        address: location,
        latitud: coords['lat'],
        longitud: coords['lng']
    }
};
module.exports = {
    getLocation
};
