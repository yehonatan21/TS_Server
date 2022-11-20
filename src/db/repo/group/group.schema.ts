import Mongoose from "mongoose";

const GroupSchema = new Mongoose.Schema({
    name: String,
    groups: {
        type: [String],
        default: null
    },
    persons: {
        type: [String],
        default: null
    },
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default GroupSchema;
