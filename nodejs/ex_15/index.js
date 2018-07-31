const express = require('express');
const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
    const message = `Request: ${req.baseUrl} ${Date.now()}`;
    console.log(message);
    next();
}

app.use(requestTime);

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Hello world"
    });
});

app.listen(3000, function (err) {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`This HTTP server is running on port ${port}`);
});
