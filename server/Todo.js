const mongoose=require('mongoose');
const  Schema = mongoose.Schema;

const todoSchema= new Schema({
    title: {
       type:String,
       required:[true,"Please enter the task's Title"]
    },
  
}, {timestamps:true})

module.exports =mongoose.model('Task',todoSchema)

