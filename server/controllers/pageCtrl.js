const path = require("path");


module.exports = {
    homePage: (req, res) => {
        res.sendFile(path.join(__dirname, "../../home.html"))
    },
    stylePage: (req, res) => {
        res.sendFile(path.join(__dirname, "../../style.css"))
    }
}