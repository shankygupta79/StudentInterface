const route = require('express').Router()
const Data = require('../database').Data
const path=require('path')
route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/prem.html'))
})
route.get('/info',(req,res)=>{
    Data.findAll({where:{name:'prem'}})
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
        name:'prem',
        slot:req.body.slot,
        quan:0,
      }).then((user)=>{
        return 
      }).catch((err)=>{
        console.log(err)
        return res.redirect('/raj')
      })
})

exports=module.exports=route
/**/
