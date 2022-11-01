const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const contact = require('./models/contact')

mongoose.connect("mongodb://localhost/test_form",()=>{
    console.log("database connected")
})
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/', (req,res)=>{
    res.render('index')
})

app.post("/Student_Registaration_Form",(req,res)=>{
    res.send(req.body)
    // console.log(req.body)
    const data=contact.create(req.body)
})
app.use(express.static('public'))

app.set('view engine', 'hbs');
app.listen(1100)