const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    intro: String,
    slogan: String,
    category: Array,
    feature: Array,
    delivery: String,
    price: String,
    startTime: String,
    endTime: String,
    imageUrl1: String,
    imageUrl2: String,
    imageUrl3: String,
})

module.exports={
    shopSchema
}