const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema
const SongSchema = new Schema({
	artist: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	duration: {
		type: Number,
		required: true,
	},
	genre: {
		type: Array,
		required: true,
	},
});

module.exports = Song = mongoose.model('song', SongSchema);