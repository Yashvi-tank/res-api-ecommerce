const express = require("express")
const app = express()
const port = 3000


// MIDDLEWARE
app.use((req, res, next) => {
    const now = Date.now()
    req.requestTime = now
    next();
   });
   // arithmetic middleware
   app.use((req, res, next) => {
    const calculation = 4 * 7; 
    req.calculattedValue = calculation;
    next();
   });

// combined response route
   app.get("/", (req, res) => {
    res.json({
        time: req.requestTime,
        calculatedValue: req.calculattedValue,
        message: "Hello World!"
    });
});

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${3000}`);
});