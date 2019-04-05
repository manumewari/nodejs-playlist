
let express = require("express");

let playlistController = require("./controllers/playlistController.js");

let app = express();

app.set("view engine","ejs");

app.use(express.static("./static"));

playlistController(app);

app.listen(3000);
console.log("you are listening to port number 3000");