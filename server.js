const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
