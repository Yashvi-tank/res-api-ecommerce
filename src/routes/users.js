const express = require("express")
const router = express.Router()

//define routes for users
router.get('/', (req, res) => {
    res.send('WELCOME TO MY PAGE')
})

router.post("/", (req, res) => {
    //get data from the request
    const { firstName, email, password } = req.body
    res.json({ firstName, email, password, _id: "randomId4567",})
})

module.exports = router