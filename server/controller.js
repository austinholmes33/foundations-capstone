const Sequelize = require('sequelize')
require('dotenv').config()
const CONNECTION_STRING = process.env.CONNECTION_STRING

const sequelize = new Sequelize(CONNECTION_STRING, {
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
    },

    seed: (req, res) => {
        sequelize.query(`
            CREATE TABLE hike_lists (
                id SERIAL PRIMARY KEY,
                name UNIQUE VARCHAR NOT NULL
            );

            CREATE TABLE hikes_hike_lists (
                id SERIAL PRIMARY KEY,
                hikes_id INT NOT NULL REFERENCES hikes(id),
                hike-lists_id INT NOT NULL REFERENCES hike-lists(id)
            );
                

            CREATE TABLE hikes (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                location VARCHAR NOT NULL,
                distance INT NOT NULL,
                difficulty VARCHAR NOT NULL
            );
        `)
    }
}