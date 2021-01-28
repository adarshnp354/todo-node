var express = require('express');
const tododata = require('../database/tododb');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {

  tododata.find().then((details)=>{
    res.render('index', { details});
  })
  
});

router.post('/',(req,res)=>{
  var task = {task:req.body.task}
  tasks=tododata(task);
  tasks.save()
  console.log(task)
  res.redirect('/')
})

router.get('/edit:id',(req,res)=>{
 const id = req.params.id
  
  tododata.findOne({_id:id}).then((data)=>{
    console.log(data);
      res.render('home',{data})
    })

})

router.post('/submit/:id',(req,res)=>{
  const id = req.params.id
  console.log(id);
  
  var details = {task: req.body.task}
  console.log(details);
  tododata.findByIdAndUpdate(id,details,(err,doc)=>{
  if(err){
    console.log(err)
}else{
    console.log("updated",doc)
}
  })
  res.redirect('/')         
})

router.get('/delete:id',(req,res)=>{
  const id = req.params.id
  tododata.findByIdAndDelete(id,(ok)=>{
    console.log('DELETED',ok)
  })

  res.redirect('/')
})




module.exports = router;
