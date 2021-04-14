const{Schema,model} = require('mongoose');

const athleteDDSSchema = new Schema({
    athleteName: {
        type: String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    sport:{
        type:String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    club:{
        type: String,
        required: true
    }
},{
    timestamps:true
});

module.exports= model('athleteDDSSchema', athleteDDSSchema);