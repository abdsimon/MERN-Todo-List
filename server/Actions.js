const mongoose=require('mongoose');
const  Schema = mongoose.Schema;

const ActionSchema= new Schema({
    title: {
       type:String,
       required:true
    },
    reps:{
        type: String,
        required: true,
    },
    load:{
        type:Number,
        required:true
    }
}, {timestamps:true})

module.exports=Action=mongoose.model