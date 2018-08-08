import express = require('express');
import app from './app';

const server = express();

server.get('*', app.getHandler);

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})