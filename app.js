const colors = require('colors');
const loc =  require('./lugar');
const clima =  require('./clima');
const argv = require('yargs').options({
    ciudad: {
        alias: '-c',
        desc: 'Direccionó de la ciudad',
        demand: true
    }
}).argv;
let getInfo = async (direction) => {
    try {
        let coords = await loc.getLocation(direction);
        let temp = await clima.getClima(coords['latitud'],coords['longitud']);
        return `La temperatura en la ciudad de ${coords['address']} es de  ${temp}°c`;
    } catch (e) {
        return `No se pudo determinar el clima pa la ciudad ${e.message} `
    }
};
getInfo(argv.direccion).then(value => console.log(value.green)).catch(reason => console.log(reason.red));





