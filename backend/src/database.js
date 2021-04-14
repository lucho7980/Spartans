//importar mongoose
const mongoose = require('mongoose');
//Conectar a base de datos local
const {SPARTANSDB_MONGODB_HOST, SPARTANSDB_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${SPARTANSDB_MONGODB_HOST}/${SPARTANSDB_MONGODB_DATABASE}`

//Establecer conexion con mongoose y DB 
mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
//Asignar la configuracion a una constante 
const connection = mongoose.connection 
//Mostrar por consola la conexion exitosa
connection.once('open', ()=>{
    console.log('Database is connected');
})