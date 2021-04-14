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
    tag:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    sport:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    main:{
        type:Boolean
        
    }
},{
    timestamps:true
});

module.exports= model('newsSchema', newsSchema);