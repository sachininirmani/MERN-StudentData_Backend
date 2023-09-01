const router = require("express").Router()

let student = require("../Modules/student")

router.route("/add").post((req, res) =>{
    const name = req.body.name
    const age = Number(req.body.age)
    const gender = req.body.gender

    const new_Student = new student({
        name,
        age,
        gender
    })

    new_Student.save().then(() => {
        res.json("student added")
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/display").get((req, res) => {
    student.find().then((student) => {
        res.json(student)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:Id").put(async (req, res) => {
    const User_Id = req.params.Id

    const {name, age, gender} = req.body
    const update_student_data = {
        name,
        age,
        gender
    }

    const update = await student.findByIdAndUpdate(User_Id, update_student_data).then(() => {
        res.status(200).send({User_Id: "updated", "user": update_student_data})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({User_Id: "Update was not successful"})
    })

})

router.route("/delete/:Id").delete(async (req, res) => {
    const User_Id = req.params.Id

    await student.findByIdAndDelete(User_Id).then(() => {
        res.status(200).send({User_Id: "deleted"})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({User_Id: "delete was not successfull"})
    })
})
 
router.route("/fetch/:Id").get(async (req, res) => {
    const User_Id = req.params.Id
    const data = await student.findById(User_Id).then((details) => {
        res.status(200).send({User_Id: "fetched", "data": details})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({User_Id: "fetch was not successfull"})
    })
})



module.exports = router