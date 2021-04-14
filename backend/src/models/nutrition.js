const{Schema,model} = require('mongoose');

const nutritionSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required: true
    }
    
},{
    timestamps:true
});

module.exports= model('nutritionSchema', nutritionSchema);