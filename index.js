import express from "express";
import { engine } from "express-handlebars"
import bodyParser from "body-parser";

// SET UP EXPRESS server:

// express instance
let app = express();

// configure express-handlebars module
app.engine("handlebars", engine());
app.set("view engine", "handlebars");


app.use(bodyParser.urlencoded({ 
    extended: false
}))

app.use(bodyParser.json())

app.get("/settings/:costType", (req, res) => {
    let costType = req.params.costType;

    let cost = 0;

    if (costType === "sms") {
        cost = settings.smsCost;
    } else if (costType === "call") {
        cost = settings.callCost;
    };

    // send the cost type and actual cost
    res.render("cost", {
        costType,
        cost
    });
});


// here we sending the data
app.post("/settings", (req, res) => {
    let smsCost = req.body.smsCost;
    let callCost = req.body.callCost;
    let warningLevel = req.body.warningLevel;
    let criticalLevel = req.body.criticalLevel;

    let settings = {
        smsCost,
        callCost,
        warningLevel,
        criticalLevel
    };

    // process data
    global = settings;

    res.render("home", {settings})
})

app.use(express.static("public"));

// render a template
// when the application starts it will look for the "/" route then...
app.get("/", (req, res) => {

    // respond with the content in home.handlebars file
    res.render("home");
});

// route
// app.get("/", (req, res) => {
//     res.send("Bill Settings WebApp Using ExpressJS");
// });

// PORT address
let PORT = process.env.PORT || 3007;

// start the server
// when the app runs it will listen for the 3007 PORT number
app.listen(PORT, () => {
    console.log(`App is starting on port http://localhost:${PORT}`);
});