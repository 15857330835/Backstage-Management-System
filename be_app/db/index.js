const mongoose = require('mongoose');

const { connect } = require('./connect');

connect.init();

const { userSchema,shopSchema } = require('./schema/index');

const userModel = mongoose.model('users', userSchema);
const shopModel = mongoose.model('shops',shopSchema)

const db = {
    user: {
        add(data) {
            return new Promise((resolve, reject) => {
                userModel.find({}, (err, doc) => {
                    // console.log('doc', doc);
                    const f = doc.some(item => item.username == data.username)

                    if (f) {
                        resolve({
                            status: 2,
                            msg: '用户名已存在'
                        })
                    } else {
                        const user = new userModel(data);
                        user.save(err => {
                            if (err) {
                                resolve({
                                    status: 0,
                                    msg: '出故障啦'
                                })
                            } else {
                                resolve({
                                    status: 1,
                                    msg: '注册成功'
                                })
                            }
                        })
                    }
                })
            })
        },
        delete(data) {
            return new Promise((resolve, reject) => {
                userModel.findById(data, (err, doc) => {
                    doc.remove(err => {
                        if (err) {
                            resolve({
                                status: 0,
                                msg: '删除失败'
                            })
                        } else {
                            resolve({
                                status: 1,
                                msg: '删除成功'
                            })
                        }
                    })
                })
            })
        },
        update(data) {
            return new Promise((resolve, reject) => {
                userModel.find({ username: data.username }, (err, doc) => {
                    const id = doc[0]._id

                    userModel.findById(id, (err, doc) => {
                        doc.password = data.password
                        doc.save(err => {
                            if (err) {
                                resolve({
                                    status: 0,
                                    msg: '修改失败'
                                })
                            } else {
                                resolve({
                                    status: 1,
                                    msg: '修改成功'
                                })
                            }
                        });
                    })
                })
            })
        },
        search(data) {
            return new Promise((resolve, reject) => {
                if (data) {
                    userModel.find({}, (err, doc) => {
                        const f = doc.some(item => item.username == data.username);

                        if (f) {
                            const r = doc.some(item => (item.username == data.username && item.password == data.password));
                            if (r) {
                                resolve({
                                    status: 1,
                                    msg: '登陆成功'
                                })
                            } else {
                                resolve({
                                    status: 2,
                                    msg: '用户名或密码错误'
                                })
                            }
                        } else {
                            resolve({
                                status: 0,
                                msg: '用户名不存在'
                            })
                        }
                    })
                } else {
                    userModel.find({}, (err, doc) => {
                        var newarr = []
                        doc.map(item => {
                            newarr.push({
                                username: item.username,
                                _id: item._id
                            })
                        })

                        resolve({
                            status: 3,
                            msg: '用户列表',
                            data: newarr
                        })
                    })
                }

            })
        }
    },
    shop:{
        add ( data ) {
            return new Promise((resolve,reject)=>{
                shopModel.find({},(err,doc)=>{
                    const flag = doc.some(item=>item.name==data.name)

                    if(flag){
                        resolve({
                            state:0,
                            info:'该商铺已经存在，请确认您的信息是否正确'
                        })
                    }else{
                        const shop = new shopModel(data)
                        shop.save(err=>{
                            if(err){
                                resolve({
                                    state:1,
                                    info:'创建失败，请确认您的信息是否正确'
                                })
                            }else{
                                resolve({
                                    state:2,
                                    info:'创建成功'
                                })
                            }
                        })
                    }
                })
            })
        },
        del (data) {
            return new Promise((resolve,reject)=>{
                shopModel.findById(data,(err,doc)=>{
                    doc.remove(err=>{
                        if(err){
                            resolve({
                                state:0,
                                info:'删除失败'
                            })
                        }else{
                            shopModel.find({},( err,docs ) => {
                                if ( !err ) resolve({
                                  info: '删除成功',
                                  state: 1, 
                                  result: docs
                                })
                              })
                        }
                    })
                })
            })
        },
        modify (data) {
            return new Promise((resolve,reject)=>{
                shopModel.findById(data._id,(err,doc)=>{
                    for(var i in data){
                        doc[i] = data[i]
                    }
                    doc.save(err=>{
                        if(err){
                            resolve({
                                state:0,
                                info:'网络出现错误，请重试'
                            })
                        }else{
                            resolve({
                                state:1,
                                info:'修改成功'
                            })
                        }
                    })
                })
            })
        },
        query () {
            return new Promise((resolve,reject)=>{
                shopModel.find({},(err,doc)=>{
                    if(err){
                        resolve({
                            state:0,
                            info:'查询失败'
                        })
                    }else{
                        resolve({
                            state:1,
                            info:'查询成功',
                            result:doc
                        })
                    }
                })
            })
        }
    }
}

module.exports = {
    user: db.user,
    shop:db.shop
}