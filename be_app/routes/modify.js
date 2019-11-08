const express = require('express')

const router = express.Router()

const { user } = require('../db/index')

router.put('/', async(req, res, next) => {
    const result = await user.update(req.body);

    res.render('modify', {
        data: JSON.stringify({
            status: result.status,
            msg: result.msg
        })
    })
})

module.exports = router;