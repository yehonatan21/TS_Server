import Mongoose, { Schema } from "mongoose";

const GroupSchema = new Mongoose.Schema({
    groupName: String,
    groups: {
        type: [String],
        default: null
    },
    persons: {
        type: [{ type: Schema.Types.ObjectId, ref: 'personsModel' }],
        default: null
    },
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default GroupSchema;
