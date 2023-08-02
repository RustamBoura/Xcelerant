// // reviewSeed.js
// const mongoose = require("mongoose");
// const db = require("../db");
// const Review = require("../models/Review");

// const reviewsData = [
//   {
//     carId: mongoose.Types.ObjectId("replace_with_correct_car_id"), // Replace "car_id_1" with the actual ID of the car from your database
//     // userId: "user_id_1", // Replace "user_id_1" with the actual ID of the user from your database
//     rating: 5,
//     comment: "Great car! Highly recommended.",
//     createdAt: new Date(),
//   },
//   {
//     carId: mongoose.Types.ObjectId("replace_with_correct_car_id"), // Replace "car_id_1" with the actual ID of the car from your database
//     // userId: "user_id_2", // Replace "user_id_2" with the actual ID of the user from your database
//     rating: 4,
//     comment: "Awesome design and performance.",
//     createdAt: new Date(),
//   },
//   // Add more review data as needed
// ];

// // Seed reviews data function
// const seedReviews = async () => {
//   try {
//     // Delete all existing reviews (optional)
//     await Review.deleteMany({});

//     // Seed reviews data
//     await Review.insertMany(reviewsData);

//     // Disconnect from MongoDB after seeding
//     db.close();
//   } catch (error) {
//     console.error("Error seeding reviews data:", error);
//     db.close();
//   }
// };

// // Call the seed function
// seedReviews();

// reviewSeed.js
const mongoose = require("mongoose");
const db = require("../db");
const Review = require("../models/Review");
const Car = require("../models/Car"); // Import the Car model

// Define the review data with the correct carId as an ObjectId
const reviewsData = [
  {
    carId: null, // We will replace this with the actual carId later
    rating: 5,
    comment: "This car is amazing!",
    createdAt: new Date(),
  },
  // Add more review objects here...
];

// Seed reviews data function
const seedReviews = async () => {
  try {
    // Fetch the first car from the Car collection
    const car = await Car.findOne();

    // Update the carId in the review data with the fetched ObjectId
    reviewsData[0].carId = car._id;

    // Delete all existing reviews (optional)
    await Review.deleteMany({});
    await Review.insertMany(reviewsData);

    // Disconnect from MongoDB after seeding
    db.close();
  } catch (error) {
    console.error("Error seeding reviews data:", error);
    db.close();
  }
};

// Call the seed function
seedReviews();

