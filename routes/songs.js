const express = require('express');
const Song = require('../models/Songs');

const router = express.Router();

router.get('/', (req, res) => {
	Song.find()
	.sort({ artist: 1 })
	.then(songs => res.json(songs))
});

router.post('/', (req, res) => {
	const newSong = new Song({
		artist: req.body.artist,
		name: req.body.name,
		duration: req.body.duration,
		genre: req.body.genre,
	});

	newSong.save().then(song => res.json(song));
});

module.exports = router;