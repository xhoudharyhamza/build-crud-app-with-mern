let mongoose= require('mongoose')
let studentSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    contact:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },

})
let Student= mongoose.model("Student", studentSchema)
module.exports= Student