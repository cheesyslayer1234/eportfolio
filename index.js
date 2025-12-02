var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const PORT = process.env.PORT || 5050;
var startPage = 'index.html';

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static frontend files
app.use(express.static(__dirname));

// Default route loader
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + startPage);
});

// Start server
const server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === '::' ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };

// Extra comments. 