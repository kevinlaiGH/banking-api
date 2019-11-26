const express = require('express')
const bodyParser = require('body-parser')

const placesRoutes = require('./routes/places-routes')

const app = express()
const port = 3000

app.use(placesRoutes)

app.get('/', (req, res) => res.send('Hello World forever!'))

app.listen(port, () => console.log(`Banking app listening on port ${port}!`))