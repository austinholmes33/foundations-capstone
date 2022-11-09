const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

const {seed} = require('./controller')

app.get('/seed', seed)

app.listen(PORT, () => {console.log('listening on PORT' + PORT)})