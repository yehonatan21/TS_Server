import Mongoose from "mongoose";

const GroupSchema = new Mongoose.Schema({
    groupName: String,
    groups: {
        type: [String],
        default: null
    },
    persons: {
        type: [{
            name: String,
            id: String
        }],
        default: null
    },
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default GroupSchema;
