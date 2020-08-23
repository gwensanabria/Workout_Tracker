const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const PORT = process.env.PORT || 8080

const app = express()

// Logging
app.use(morgan('dev'))

// // Use deployed database if deployed || use local mongoHeadlines database
// let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// //Connect to mongoDB
// mongoose.connect(MONGODB_URI)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

// TRING TO SOLVE CORS ISSUE
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*')
//     res.header("Access-Control-Allow-Origin", 'Origin, X-Requested-With, Content-Type, Accept')
//     next()
// })

// Connect to mongoDB, use deployed database if deployed || use local mongoHeadlines database
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
