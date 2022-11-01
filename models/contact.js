const mongoose=require('mongoose')
const Contact = mongoose.Schema({
    name:String,
    lastname:String,
    email:String,
    mobile:Number,
    dob:String,
    address:String,
    city:String,
    pin:Number,
    state:String,
    qualification:String,
    specialization:[],
    password:String,
})
module.exports=mongoose.model("test",Contact)
