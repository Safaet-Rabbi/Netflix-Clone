// utils/passport.js
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { User } from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/v1/user/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in our db
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // User already exists
        return done(null, existingUser);
      }
      // Create new user if doesn't exist
      const newUser = new User({
        googleId: profile.id,
        fullName: profile.displayName,
        email: profile.emails[0].value
      });
      await newUser.save();
      done(null, newUser);
    } catch (error) {
      done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
