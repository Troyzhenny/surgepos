const express = require('express');
const pool = require('./src/config/db');
const cors = require('cors');
const app = express();

const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

//_____ Routes _____ //



app.listen(PORT, () => console.log(`server has started on ${PORT}`));
