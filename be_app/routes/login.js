const express = require('express');
const { user } = require('../db/index');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken')


const router = express.Router();

router.post('/', async(req, res, next) => {
    const result = await user.search(req.body);
    const { token, username } = req.body

    let access_token = ''

    if (!token) {
        let private_key = fs.readFileSync(path.join(__dirname, '../rsa/private_key.pem'))
        let public_key = fs.readFileSync(path.join(__dirname, '../rsa/public_key.pem'))
        access_token = jwt.sign(username, private_key, { algorithm: 'RS256' });
    }

    res.render('login', {
        data: JSON.stringify({
            status: result.status,
            msg: result.msg,
            token: token && '' || access_token

        })
    })
})

module.exports = router;