const express = require('express');
const path = require('path')
const multer = require('multer')

const router = express.Router()

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/upload'))
    },
    filename: function(req, file, cb) {
        const type = file.originalname.split('.')[1]
        const filename = file.fieldname + '-' + Date.now() + '.' + type
        cb(null, filename)
    }
})

var upload = multer({ storage: storage })

router.post('/', upload.any(), (req, res, next) => {
    res.render('album', {
        data: JSON.stringify({
            status: 0,
            msg: '上传成功'
        })
    })
})

module.exports = router;