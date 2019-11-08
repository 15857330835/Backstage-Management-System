const express = require('express')

const router = express.Router()
const { shop } = require('../db/index')

router.route('/')
    .post(async (req,res,next)=>{
        const result =await shop.add(req.body)
        res.render('shop',{
            data:JSON.stringify({
                state:result.state,
                info:result.info,
                result:result.result
            })
        })
    })
    .delete(async (req,res,next)=>{
        const { _id } =req.query
        const result =await shop.del(_id)

        res.render('shop',{
            data:JSON.stringify({
                state:result.state,
                info:result.info,
                result:result.result
            })
        })
    })
    .put(async (req,res,next)=>{
        console.log(req.query)
        const result =await shop.modify(req.query)
        console.log(result)
        res.render('shop',{
            data:JSON.stringify({
                state:result.state,
                info:result.info
            })
        })
    })
    .get(async (req,res,next)=>{
        const result =await shop.query()

        res.render('shop',{
            data:JSON.stringify({
                state:result.state,
                info:result.info,
                result:result.result
            })
        })
    })




module.exports=router