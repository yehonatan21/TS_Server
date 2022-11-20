import Mongoose from "mongoose";

const PersonsSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    groups: {
        type: [String],
        default: null
    },
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default PersonsSchema;
