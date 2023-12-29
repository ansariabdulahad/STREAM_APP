import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
    title: String,
    desc: String,
    duration: Number,
    actorsName: String,
    thumbnail: String,
    video: String,
    category: String,
    keywords: String,
    job_id: String,
    active: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// FOR OVERWRITE ERRORS ONLY
mongoose.models = {};

export default mongoose.model('movie', movieSchema);