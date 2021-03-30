const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const songs = require('./routes/songs');

const app = express();


// middleware 
app.use(bodyParser.json());

// db connection key
const mongoUri = 'mongodb+srv://mircea:mircea123@cluster0.2ohpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
	.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('DB conected!'))
	.catch(err => console.log(err));

app.use('/songs', songs)

const port = process.env.PORT || 5000;   // in case that I will deploy the app on heroku or smt

app.listen(port, () => console.log(`<<___>> Server has started on port ${port}`));