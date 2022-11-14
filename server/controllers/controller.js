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
    // submitList: (req, res) => {
    //     console.log(req.body)
    //     const listName = req.body.listName

    //     sequelize.query(`
    //         INSERT INTO hike_lists (listName)
    //         VALUES ('${listName}');
    //     `)
    //     .then((dbRes) => {         
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         res.status(500).send('sequelize error')
    //     })
    // },

    submitHike: (req, res) => {
        console.log(req.body)
        const hikeName = req.body.hikeName
        const location = req.body.location
        const distance = req.body.distance
        const difficulty = req.body.difficulty

        sequelize.query(`
            INSERT INTO hikes (hikeName, location, distance, difficulty)
            VALUES ('${hikeName}', '${location}', '${distance}', '${difficulty}');
        `)
        .then((dbRes) => {         
            res.status(200).send(dbRes[0])
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('sequelize error')
        })
    },

    // getHikes: (req,res) => {
    //     const listName = req.body.listName
    //     const hikeName = req.body.hikeName
    //     const location = req.body.location
    //     const distance = req.body.distance
    //     const difficulty = req.body.difficulty

    //     sequelize.query(`
    //         SELECT hikeName, location, distance, difficulty);
    //         VALUES ('${listName}', '${hikeName}', '${location}', '${distance}', '${difficulty}');
    //     `)
    //     .then((dbRes) => {
    //         res.status(200).send(dbRes[0])
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         res.status(500).send('sequelize error')
    //     })
    }
