const mongoose = require("mongoose");
const db = require("../db");
const User = require("../models/User");


// Define the user data with the correct carId as an ObjectId
const usersData = [
  {
    username: "user1",
    email: "user1@example.com",
    password: "password1",
    createdAt: new Date(),
  },
  // Add more user objects here...
];

// Seed users data function
const seedUsers = async () => {
  try {
    // Delete all existing users (optional)
    await User.deleteMany({});
    await User.insertMany(usersData);

    // Disconnect from MongoDB after seeding
    db.close();
  } catch (error) {
    console.error('Error seeding user data:', error);
    db.close();
  }
};

// Call the seed function
seedUsers();
