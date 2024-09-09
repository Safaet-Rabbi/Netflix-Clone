import express from "express";
import passport from "passport";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

// Routes for traditional login, registration, and logout
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

// Route to initiate Google login
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Route to handle the callback after Google has authenticated the user
router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        // Successful authentication, redirect to the frontend or send token
        res.redirect("/"); // You can modify this redirect URL to where you want to land the user
    }
);

export default router;
