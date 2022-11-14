const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

const {submitHike, searchHikes} = require('./controllers/controller.js')
const {homePage, stylePage, homeJS} = require('./controllers/pageCtrl.js')

app.get('/', homePage)
app.get('/home', homeJS)
app.get('/style', stylePage)
// app.post('/submitlist', submitList)
app.post('/submithike', submitHike)
app.get('/searchhikes', searchHikes)

app.listen(PORT, () => {console.log('listening on PORT ' + PORT)})