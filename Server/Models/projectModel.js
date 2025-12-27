import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Waiting", "In progress", "completed"],
        default: "Waiting"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
}, { timestamps: true })

export const projectModel = mongoose.model('project', projectSchema)