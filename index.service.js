const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3001;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    for (let i = 0; i < 1000000000000000; i++) {

    }
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log('index service running on port 3001!');
});