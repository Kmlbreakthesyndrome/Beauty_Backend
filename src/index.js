const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MongoDBURL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(8080, () => console.log('Server is running on port 8080'));