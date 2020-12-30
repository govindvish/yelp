const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/config.env' });

const restaurants = require('./routes/restaurants');

const app = express();

// To use Body parser middleware
app.use(express.json());

app.use('/api/v1/restaurants', restaurants);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
