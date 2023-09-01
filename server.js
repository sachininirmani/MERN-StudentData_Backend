const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 8070

app.use(cors())
app.use(bodyparser.json())

const URL = process.env.MONGODB_URL

mongoose.connect(URL, {
   
    useNewUrlParser: true,
    useUnifiedTopology: true,

   
})

const connection = mongoose.connection
connection.once("open" , () => {
    console.log("the connnection is successful")
})

const Student_Router = require("./Routes/students.js")
app.use("/student", Student_Router)

app.listen(PORT, (req, res) => {
    console.log(`the server is up and running on port number ${PORT} the response is ${res} `)
})
