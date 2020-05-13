const route = require('express').Router()
const Data = require('../database').Data
const path=require('path')
route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/students.html'))
})
route.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/table.css'))
})
route.get('/info',(req,res)=>{
    Data.findAll({
            where:{
            quan:{
                 $lte : 3 
                
            } 
            }
        })
        .then((emps) => {
            res.status(200).send(emps)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                error: "Could not retrive data"
        })
    })
})

route.post('/add',(req,res)=>{
    Data.create({
        name:'Raj',
        slot:req.body.slot,
      }).then((user)=>{
        return 
      }).catch((err)=>{
        console.log(err)
        return res.redirect('/raj')
      })
})

exports=module.exports=route
/**/
