// CRUD operations - create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// HOW TO GENERATE YOUR OWN ID
// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString())

const client = new MongoClient(connectionURL)

const connectToDatabase = async () => {
    try {
        await client.connect()
        console.log('Connected to the database!')

        const db = client.db(databaseName)

        // INSERT ONE ELEMENT IN THE COLLECTION 'USERS'
        // db.collection('users').insertOne({
        //     name: 'Renata',
        //     age: 49
        // })
        // .then(result => {
        //     console.log(result)
        // })
        // .catch(error => {
        //     console.log('Unable to insert user: ', error)
        // })

        // INSERT MORE THAN ONE ELEMENT IN THE COLLECTION 'USERS'
        // db.collection('users').insertMany([
        //     {
        //         name: 'Marta',
        //         age: 21
        //     }, {
        //         name: 'Gianluca',
        //         age: 33
        //     }
        // ]).then(result => {
        //         console.log(result)
        // })
        // .catch(error => {
        //     console.log('Unable to insert user: ', error)
        // })

        // INSERT MORE THAN ONE ELEMENT IN THE COLLECTION 'TASKS'
        // db.collection('tasks').insertMany([
        //     {
        //         description: 'grocery shopping',
        //         completed: false
        //     }, {
        //         description: 'workout',
        //         completed: false
        //     }, {
        //         description: 'lunch',
        //         completed: true
        //     }
        // ]).then(result => {
        //             console.log(result)
        // })
        // .catch(error => {
        //      console.log('Unable to insert tasks: ', error)
        // })

        // // FIND_ONE FUNCTION WITHOUT CALLBACK - THIS FUNCTION NO LONGER SUPPORTS CALLBACKS
        // const user = await db.collection('users').findOne({_id: new ObjectId('66fd2668db227e865ed82f4b')})
        // if (!user) {
        //     console.log('User not found!')
        // } else {
        //     console.log('Found user:', user)
        // }

        // FIND USERS WITH AGE 21, IT RETURN A CURSOR, THAT IS WHY WE NEED TOARRAY FUNCTION
        // const users = await db.collection('users').find({age: 21}).toArray()
        // console.log(users)

        // RETURNS S NUMBER OF USERS WITH AGE 21
        // const numberOfUsers = await db.collection('users').countDocuments({age: 21})
        // console.log(numberOfUsers)

        // FIND A TASK BY IT'S ID
        // const task = await db.collection('tasks').findOne({_id: new ObjectId('66fd2a2c178e1d46ce1d0083')})
        // if (!task) {
        //     console.log('Task not found!')
        // } else {
        //     console.log('Found task:', task)
        // }

        // FIND TASKS THAT ARE NOT COMPLETED YET
        // const tasksNotCompleted = await db.collection('tasks').find({completed: false}).toArray()
        // console.log('Tasks that are not completed yet: ', tasksNotCompleted)

        // CHANGE SOMETHING IN THE DOCUMENT
        // db.collection('users').updateOne({
        //     _id: new ObjectId('66fd218f7bf7d52560a42996')
        // }, {
        //     $inc: {
        //         age: 1
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // MAKE ALL TASKS COMPLETED
        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // DELETE MULTIPLE DOCUMENTS
        // db.collection('users').deleteMany({
        //     age: 21
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // DELETE ONE DOCUMENT
        // db.collection('tasks').deleteOne({
        //     description: 'lunch'
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

    } catch (error) {
        console.log('Unable to connect to database!', error)
    }
}

connectToDatabase()