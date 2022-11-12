const path = require("path");


module.exports = {
    homePage: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/home.html"))
    },
    stylePage: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/style.css"))
    },
    homeJS: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/home.js"))
    }
}