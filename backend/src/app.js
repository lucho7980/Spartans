//importar express
const express = require('express');
//importar cors
const cors = require('cors');
const morgan= require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')
//iniciar servidor
const app = express();

//Settings del servidor
app.set('port',process.env.PORT || 4000);
require('./config/passport')
//Middlewares
app.use(cors());//Cors ejecutado
app.use(express.json());//Entender json
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//Variables globales
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg')
    res.locals.error_msg=req.flash('error_msg')
    res.locals.error=req.flash('error');
    res.locals.user=req.user || null
    next()
})
//Rutas
app.use('/users',require('./routes/users'));
app.use('/dds', require('./routes/dds'));
//app.use(require('./routes')); 
//Exportar
module.exports= app;