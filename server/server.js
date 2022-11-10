const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

const {seed, submitList, submitHike} = require('./controllers/controller.js')
const {homePage, stylePage} = require('./controllers/pageCtrl.js')

app.get('/seed', seed)
app.get('/', homePage)
app.get('/style', stylePage)
app.post('/submitlist', submitList)
app.post('/submithike', submitHike)

app.listen(PORT, () => {console.log('listening on PORT ' + PORT)})