import * as Mongoose from 'mongoose';
// import { PersonsModel } from './persons/persons.model';
// import { GroupModel } from './groups/group.model';

let database: Mongoose.Connection;

export const connect = () => {
    const uri = 'mongodb://localhost:27017/storage';

    if (database) {
        return;
    }
    // In order to fix all the deprecation warnings, below are needed while connecting
    Mongoose.connect(uri);

    database = Mongoose.connection;
    // When mentioned database is available and successfully connects
    database.once('open', async () => {
        console.log('Connected to database successfully');
    });

    // In case of any error
    database.on('error', () => {
        console.log(`Error connecting to database. Check Whether mongoDB
        installed or you can try to give opensource Mongo Atlas database`);
    });

    return database;
};

// Safer way to get disconnected 
export const disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};