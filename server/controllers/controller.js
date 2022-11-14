const Sequelize = require('sequelize')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {


    submitHike: (req, res) => {
        console.log(req.body)
        const hikeName = req.body.hikeName
        const location = req.body.location
        const distance = req.body.distance
        const difficulty = req.body.difficulty
        const category = req.body.category

        sequelize.query(`
            INSERT INTO hikes (hikeName, location, distance, difficulty, category)
            VALUES ('${hikeName}', '${location}', '${distance}', '${difficulty}', '${category}');
        `)
        .then((dbRes) => {         
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    },

    searchHikes: (req,res) => {
        console.log(req.params)
        const {searchHikeNameInput} = req.params

        sequelize.query(`
            SELECT *
            FROM hikes
            WHERE hikeName = '${searchHikeNameInput}';
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    }
}