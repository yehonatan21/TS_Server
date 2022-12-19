import Mongoose, { Schema } from "mongoose";

const PersonsSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    groups: {
        type: [{ type: Schema.Types.ObjectId, ref: 'groupModel' }],
        default: null
    },
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default PersonsSchema;
