const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log('Connected to the database!')

        const db = client.db(databaseName)
    } catch (error) {
        console.log('Unable to connect to database!', error)
    }
}

connectToDatabase()