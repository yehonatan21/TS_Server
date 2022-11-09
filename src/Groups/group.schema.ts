import * as Mongoose from "mongoose";

const GroupSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default GroupSchema;
