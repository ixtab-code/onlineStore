require("dotenv").config();

const express = require('express');
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const MONGODB_URL = `mongodb+srv://ixtab:1@cluster0.jq65ufq.mongodb.net/?retryWrites=true&w=majority`;

const shopRoutes = require("./server/routes/shop");
app.use(shopRoutes);


mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
    .then(() => console.log('DBConnection Successfull'))
	.then(() => {
		app.listen(process.env.PORT || 3000);
		console.log(`Started on port ${process.env.PORT}`);
	})
	.catch((err) => console.log(err));
