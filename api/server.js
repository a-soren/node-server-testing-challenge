const express = require('express');
const Kids = require('../kids/kidsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({api : "up"});
});

server.get('/kids', (req,res) => {
    Kids.getAll()
        .then(kids => {
            res.status(200).json(kids);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


module.exports = server;