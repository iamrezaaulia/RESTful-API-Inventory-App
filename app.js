require('dotenv').config()

const express = require('express');
const app = express();
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import Route
const productsRouter = require('./src/routes/products')
const categoriesRouter = require('./src/routes/categories')
const authRouter = require('./src/routes/auth')

// Connect DB In Config
const port = process.env.SERVER_PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Route Middleware
app.use('/api/products', productsRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/user', authRouter)