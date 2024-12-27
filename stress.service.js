const express = require('express');
const morgan = require('morgan');
const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length;
const port = 3002;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    const app = express();

    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        for (let i = 0; i < 1000000000000000; i++) {
            // Simulate heavy computation
        }
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Worker ${process.pid} started`);
    });
}