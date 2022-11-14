import Mongoose from 'mongoose';

let database: Mongoose.Connection;

export const connect = () => {
    const uri = 'mongodb://localhost:27017/storage';

    if (database) {
        return;
    }
    Mongoose.connect(uri);

    database = Mongoose.connection;
    database.once('open', async () => {
        console.log('Connected to database successfully');
    });

    database.on('error', () => {
        console.log(`Error connecting to database. Check Whether mongoDB
        installed or you can try to give opensource Mongo Atlas database`);
    });

    return database; 
};

export const disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};