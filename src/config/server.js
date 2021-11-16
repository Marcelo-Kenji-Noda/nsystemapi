const port = 3003;
//const port = process.env.PORT;

const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(allowCors)
server.use(queryParser())

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}`);
})
module.exports = server;
