const mongoose = require("mongoose")

const Schema = mongoose.Schema

const student_schema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    }

})

const student = mongoose.model("student", student_schema)
module.exports = student