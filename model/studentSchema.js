import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    contact: {
        type: Number,
        require: true,
    }
})

const Student = mongoose.model("Student", studentSchema);

export default Student;