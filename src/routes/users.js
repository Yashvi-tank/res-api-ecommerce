const express = require("express")
const router = express.Router()

//define routes for users
router.get('/', (req, res) => {
    res.send('WELCOME TO MY PAGE')
})

router.post("/", (req, res) => {
    console.log(req.body) // log the request body to the console
    res.send("you have reached the post request!")
})

module.exports = router