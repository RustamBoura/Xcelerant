require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Import the routes folder
const carRoutes = require('./routes/carRoutes');
const reviewRoutes = require("./routes/reviewRoutes");
const db = require('./db'); // Import the db connection



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use the db connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB.');
});

// Use the routes defined in the index.js file
app.use('/api', routes);
app.use('/api/cars', carRoutes);
app.use("/api/reviews", reviewRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
