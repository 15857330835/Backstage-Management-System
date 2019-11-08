const express = require('express');
const { user } = require('../db/index');

const router = express.Router();

router.post('/', async(req, res, next) => {

    console.log('req.body', req.body);
    const result = await user.add(req.body);

    res.render('reg', {
        data: JSON.stringify({
            status: result.status,
            msg: result.msg
        })
    })
})

module.exports = router;