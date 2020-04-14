const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true})) //always needed
app.use(bodyParser.json());
app.use(express.json()); //allows for JSON data to be processed as objects
app.use("/assets", express.static("assets")) //allow html/css/js filed to be attached to the app


app.get("/", (req, res) => {
    res.render("calc.ejs")
})

app.post("/operation", (req, res) => {
    let inputA = req.body.inputA
    let inputB = req.body.inputB
    res.redirect("/")
})


const port = 3000;
app.listen(port, () => {
    console.log("port on")
})