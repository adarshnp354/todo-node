

const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost:27017/tododb',{useNewUrlParser:true, useUnifiedTopology: true })

const Schema = mongoose.Schema
const todoschema = new Schema({
    task:String
},{strict:false})


 var tododata = mongoose.model('tododata',todoschema)
 module.exports=tododata;