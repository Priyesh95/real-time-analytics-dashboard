// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Create Redis client
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Real-Time Analytics Dashboard Backend');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
