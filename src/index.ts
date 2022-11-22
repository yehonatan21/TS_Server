import { connectToDB, disconnectFromDB } from './db/initialize'
import { startServer } from './express/server'

try {
    connectToDB();
    startServer()
}
catch (err) {
    console.log(err.message)
    disconnectFromDB()
}