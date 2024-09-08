import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import "./utils/passport.js"; // Import passport configuration

dotenv.config({ path: ".env" });

databaseConnection();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Session and Passport setup
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
