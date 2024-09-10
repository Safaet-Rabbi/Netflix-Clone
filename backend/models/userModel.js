import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    googleId: {
        type: String,
        default: null // This field will store the Google account ID for users who sign up via Google
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);
