import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    affiliatedProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    }]
})

export const userModel = mongoose.model('user', userSchema)