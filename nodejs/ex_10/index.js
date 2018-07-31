const express = require('express');
const oneLinerJoke = require('one-liner-joke');
const app = express();
const port = 3000
const getRandomJoke = oneLinerJoke.getRandomJoke();
const getSecondJoke = oneLinerJoke.getRandomJoke();
app.get('/', function(request, response) {
    response.json({ name: 'Marta', age: '40'});
  });

app.listen(3000, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`This HTTP server is running on port ${port}`);
});

app.get('/joke', (req, res) => {
    res.send(getRandomJoke);
});

app.get('/jokes', (req, res) => {
//    let twoJokes = getRandomJoke + getRandomJoke;
    res.send(getRandomJoke.body + getSecondJoke.body);
});

app.post('/joke', (req, res) => {
    res.send(`My jokes are too funny, I'm not getting any new ones from you!`);
});

app.put('/joke', (req, res) => {
    res.send(`No no no, I'm not changing my act!`);
});

app.delete('/joke', (req, res) => {
    res.send(`Good jokes never get old!`);
});

app.all('/joke', (req, res) => {
    res.send(` I know I'm so good that you're looking for jokes everywhere!`);
});