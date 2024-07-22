import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,  // Typo correction: "Avtar" to "avatar"
});

// Check if the model already exists before creating it
export const User = mongoose.models.User || mongoose.model("User", userSchema);
