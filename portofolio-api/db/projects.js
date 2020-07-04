const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProjectSchema = new Schema({
    _id: Number,
    name: String,
    path: String,

})