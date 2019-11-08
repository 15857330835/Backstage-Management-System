const express = require('express')

const router = express.Router()

const { user } = require('../db/index')

router
    .route('/manager')
    .get(async(req, res, next) => {
        const result = await user.search();

        res.render('manager', {
            data: JSON.stringify({
                status: result.status,
                msg: result.msg,
                data: result.data
            })
        })
    })
    .delete(async(req, res, next) => {
        const { _id } = req.body
        const result = await user.delete(_id)

        res.render('manager', {
            data: JSON.stringify({
                status: result.status,
                msg: result.msg
            })
        })
    })

module.exports = router;