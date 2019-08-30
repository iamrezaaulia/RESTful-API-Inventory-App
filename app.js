require('dotenv').config()

const express = require('express');
const app = express();
const logger = require('morgan')
const bodyParser = require('body-parser')
const productsRoute = require('./src/routes/products')
const categoriesRoute = require('./src/routes/categories')

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/products', productsRoute)
app.use('/api/categories', categoriesRoute)