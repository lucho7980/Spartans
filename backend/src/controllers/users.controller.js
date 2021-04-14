// Se construye el controlador de usuarios
const userCtrl = {}; 
const passport = require ('passport');
const User = require('../models/users'); 

//Metodo GET
userCtrl.getUsers = async (req,res)=>{
    const users = await User.find(); 
    res.json(users); 
    /* console.log(users); */
}
userCtrl.signUp = async (req,res)=>{
    const errors = [];
    const {name,email,password,confirm_password}= req.body;
    if(password != confirm_password) {
        errors.push({text:"Las contraseñas no coinciden"})
    }
    if(password.length < 6){
        errors.push({text:"La contraseña debe tener por lo menos 6 caracteres!"});
    }
    if (errors.length > 0) {
        res.render('ruta',{
          errors,
          name,
          email,
          password,
          confirm_password  
        })
    }
    else{
        const emailUser= await User.findOne({email:email});
        if(emailUser){
            req.flash('error_msg',"El correo ya está en uso!")
            res.redirect('#');
        }else{
            const newUser= new User({name,email,password})
            newUser.password= await newUser.encryptPassword(password)
            req.flash('success_msg','Ya estás registrado!')
            await newUser.save()
            res.redirect('#');
        }
    }
};

userCtrl.signIn=passport.authenticate('local',{
    failureRedirect: '#',
    successRedirect:'#',
    failureFlash:true
});
userCtrl.logOut= (req,res)=>{
    req.logout()
    req.flash('success_msg','Sesión cerrada!');
    res.redirect(('#'))
};
userCtrl.createUser= async(req,res)=>{
    /* const errors = [] */
    const {username,email,password,confirm_password}= req.body
    const newUser= new User({username,email,password})
    newUser.password = await newUser.encryptPassword(password)
    await newUser.save()
    res.send('Usuario creado')
    
}

module.exports= userCtrl; 
