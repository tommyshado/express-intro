import express from "express";
import { engine } from "express-handlebars"

// SET UP EXPRESS server:

// express instance
let app = express();

// configure express-handlebars module
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// render a template
// when the application starts it will look for the "/" route then...
app.get("/", (req, res) => {

    // respond with the content in home.handlebars file
    res.render("home");
});

// route
app.get("/", (req, res) => {
    res.send("Bill Settings WebApp Using ExpressJS");
});

// PORT address
let PORT = process.env.PORT || 3008;

// start the server
// when the app runs it will listen for the 3007 PORT number
app.listen(PORT, () => {
    console.log(`App is starting on port http://localhost:${PORT}`);
});