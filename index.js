import express from 'express';
const app = express();
const port = 80;

console.log('started');

app.get('/', (req, res) => {
    res.send('Express says hi!');
});

app.get('/get-example', (req, res) => {
  res.send('This is a GET request');
});

app.listen(port, () => {
    console.log(`Express Server listening on port ${port}`);
});