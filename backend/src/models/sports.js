const{Schema,model} = require('mongoose');

const sportSchema = new Schema({
    description:{
        type:String,
        required:true,
    },
    sport:{
        type:String,
        required:true
    },
   tag:{
       type:String,
       required:true
   }
},{
    timestamps:true
});

module.exports= model('athleteSchema', athleteSchema);