const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//Importar modelo USER
const User=require('../models/users');
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async (email,password,done)=>{
    //Cuando coincidan los usuarios...
    const user= await User.findOne({email})
    if(!user){
        return done(null,false,{message:"Este usuario no existe!"})
    }else{
        //Coincidencia de contraseñas
        const match = await user.matchPassword(password)
        if (match) {
            return done(null,user)//Retorna el usuario si hay coincidencias
        }else{
            return done(null,false,{message:"La contraseña es incorrecta! Prueba de nuevo."})
        }
    };
}));
//Guardar usuario 
passport.serializeUser((user,done)=>{
    done(null,user.id);
});
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    });
});

