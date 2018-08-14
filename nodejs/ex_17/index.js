const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/testing', (req, res) => {
    res.render('testing');
});

app.get('/:id', (req, res) => {
    res.send(`The product is ${req.params.id}`)
});

app.listen(3000, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`This HTTP server is running on port ${port}`);
});
