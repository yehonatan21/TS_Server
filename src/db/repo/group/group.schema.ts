import Mongoose from "mongoose";

const GroupSchema = new Mongoose.Schema({
    name: String,
    dateOfJoining: {
        type: String,
        format: "date-time",
        default: new Date(),
    }
});

export default GroupSchema;
