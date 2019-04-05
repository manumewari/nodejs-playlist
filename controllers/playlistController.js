const bodyParser = require("body-parser");

let data = [{user: "John Rubino"}, {user: "Peter Schiff"}];
let urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

    app.get("/playlist", function (req, res) {
        res.render("playlist", {users: data});

    });

    app.post("/playlist", urlEncodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete("/playlist/:user", function (req, res) {
        data = data.filter((user) => {
            return (user.user !== req.params.user.trim());
        });
        res.json(data);
    });

}