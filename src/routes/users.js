const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")

//define routes for users
router.get('/', (req, res) => {
    res.send('WELCOME TO MY PAGE')
})

router.post("/", (req, res) => {
    //get data from the request
    const { firstName, email, password } = req.body
    res.json({ firstName, email, hashedPassword, _id: "randomId4567",})
})

app.post("/", hashPassword, (req, res) => {
    // Get the data from the request
    const { firstName, email } = req.body;
    const hashedPassword = req.hashedPassword;
  
    res.json({
      firstName,
      email,
      hashedPassword,
      _id: "randomId4567",
    });
  });

module.exports = router