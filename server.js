const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const userRoutes = require('./routes/user-routes');
require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to MongoDB'))
    .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log(`listening port ${process.env.PORT}`);
});

app.use(userRoutes);

