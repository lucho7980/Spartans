//Importar dotenv para manipular variables de entorno 
require('dotenv').config();
//Importar app para que index lo manipule
const app = require('./app');
//Importar base de datos
require('./database')

//Iniciar listen
async function main(){
    await app.listen(app.get('port')) //get trae el valor de PORT en app.js
    console.log('Server on port ', app.get('port'));
}

//Ejecutar aplicación
main();
