const express = require('express');
const app = express();
const config = require('./config.json');

console.log('started');

app.get('/', (req, res) => {
    res.send('Express says hi!');
});

app.get('/get-example', (req, res) => {
  res.send('This is a GET request');
});

app.listen(config.port, () => {
    console.log(`Express Server listening on port ${config.port}`);
});