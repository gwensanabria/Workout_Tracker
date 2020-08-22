const express = require('express')
const mongoose = require('mongoose')
// const morgan = require('morgan')
// const apiR = require('./routes/apiRoutes.js')
// const htmlR = require('./routes/htmlRoutes.js')

const PORT = process.env.PORT || 8080

const app = express()
// app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false
})

// ROUTES
app.use(require('./routes/apiRoutes'))
app.use(require('./routes/htmlRoutes'))

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})
