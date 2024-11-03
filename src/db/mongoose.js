const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB Compass!')
}).catch((error) => {
    console.log('Error: ' + error)
})