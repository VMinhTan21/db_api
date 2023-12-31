
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Order = new Schema({
    ObjectID: String,
    Date: String,
    Table: String,
    StaffID: String,
    Status: String,
    OrderList: Array,
    Note: String,
    Total: Number
})

module.exports = mongoose.model('orders', Order)