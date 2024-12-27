const express = require('express');
const app = express();
const port = 3000;
const proxy = require('express-http-proxy');

app.use('/stress-test',proxy('http://localhost:3002'));
app.use('/index-test',proxy('http://localhost:3001'));

app.listen(port, () => {
    console.log('Gateway service running on port 3000!');
});