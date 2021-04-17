const{Schema,model} = require('mongoose');

const newsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author:{
        type:String,
        required:true
    },
    cathegory:{
        type:String,
        required:true
    },
    content:{
        type:String,

    },
    date:{
        type:Date,
        required:true,
        default: Date.now
    },
},{
    timestamps:true
});

module.exports= model('News', newsSchema);