const express = require("express")
const app = express()
const port = 3000
const userRoutes = require("./routes/users")

//Db connection
const connectDB = require("./utils/db")

//MIDDLEWARE
app.use(express.json())


// ROUTES
app.use("/api/users", userRoutes)

// MIDDLEWARE
app.use((req, res, next) => {
    const now = Date.now()
    req.requestTime = now
    next();
   });

   

//cors middleware
app.use((req, res, next) => {
    res.header("Access-Control-allow-origin", "*")
    res.header(
        "Access-Control-allow-headrs",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next()
})
connectDB()

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