const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList' });
});

const testJSON = [
    {
        name: 'John Smith',
        username: 'CaptainCode'
    },
    {
        name: 'Jane Doe',
        username: 'JaneyCakes'
    }
];

// If we receive an HTTP GET request to /sendjson
router.get('/sendjson', (req, res, next) => {
    res.json(testJSON); // respond with a json (testJSON) instead of res.render()
});

module.exports = router;
