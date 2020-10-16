import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    body: { type: String, required: true },
    comments: { type: Number },
    views: { type: Number },
});

export default mongoose.model("Post", PostSchema);