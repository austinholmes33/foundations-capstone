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
    submitList: (req, res) => {
        const name = req.body.name

        sequelize.query(`
            INSERT INTO hike_lists (name);
            VALUES ('${name}');
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    },

    submitHike: (req, res) => {
        const name = req.body.name
        const location = req.body.location
        const distance = req.body.distance
        const difficulty = req.body.difficulty

        sequelize.query(`
            INSERT INTO hikes (name, location, distance, difficulty);
            VALUES ('${name}', '${location}', '${distance}', '${difficulty}');
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    },

    }