const express = require('express');
const mongoose = require('mongoose');
const initData = require('./data.js'); // Correct relative path to data.js
const Listing = require('../models/listing.js'); // Correct relative path to listing.js
const MONGO_URL = 'mongodb://127.0.0.1:27017/Wanderlust';

const app = express();
const PORT = process.env.PORT || 3000; // Use an environment variable or default to 8080

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(async () => {
        console.log("Connected to database");
        await initdata(); // Initialize data after connecting to the database
        app.listen(PORT, () => {
            console.log("Server is running on port ${PORT}");
        });
    })
    .catch(err => {
        console.log("Database connection error:", err);
    });

const initdata = async () => {
    try {
        console.log("Initializing data...");
        await Listing.deleteMany({});
        console.log("All listings deleted.");
        await Listing.insertMany(initData.data);
        console.log("Data was initialized");
    } catch (error) {
        console.log("Error during data initialization:", error);
    }
};