const express = require('express');
const app = express();
const port = 3000

app.get('/', function(request, response) {
    response.send(`<p>Congrats! You're using your first Node.js and Express as Web Server</p>`);
});

app.listen(3000, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`This HTTP server is running on port ${port}`);
});
