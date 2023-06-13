const express = require("express");
const {engine} = require("express-handlebars");
const path = require("path")
const {PORT} = require("./config.js");

//initializations
const app = express();

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}))
app.set("view engine", ".hbs");


//midlewars

//global varibles

//routes
app.use(require("./routes/home.routes.js"));

//static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
});