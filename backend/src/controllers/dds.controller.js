const ddsCtrl={ }

const Dds= require('../models/dds')



ddsCtrl.createNewDds= async (req,res)=>{
    const{ athleteName, description, sport, age, club}= req.body;
    const newDds =new Dds({
        athleteName,
        description,
        sport,
        age,
        club
    });
    //newDds.user= req.user.id;
    await newDds.save(); //se utiliza para guardar la nota creada en la  base de datos
    // req.flash('success_msg','Note Added Successfully');
    // res.redirect('/dds');
    
};

ddsCtrl.renderDds= async(req,res)=>{
   const dds= await Dds.findById(req.params.id);
   res.send(dds);
};

ddsCtrl.renderEditForm= async (req,res)=>{
   const dds=await Dds.findById(req.params.id).lean();//busca la nota mediante el id
   if (note.user != req.user.id) {
      // req.flash('error_msg', 'Not Authorized')
       return res.send('No autorizado')
   }
    res.render('notes/edit-note', {note});//ruta para renderizar el formulario para editar
};

ddsCtrl.updateNotes= async(req,res)=>{
    const{title, description}=req.body;
    await Note.findByIdAndUpdate(req.params.id, {title,description});
    req.flash('success_msg','Note Update Successfully');
    res.redirect('/notes');
};
// notesCtrl.deleteNote= async(req,res)=>{
//     await Note.findByIdAndDelete(req.params.id);
//     req.flash('success_msg',' Note delete Successfully');
//     res.redirect('/notes');
// };


module.exports=ddsCtrl;