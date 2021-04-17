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
