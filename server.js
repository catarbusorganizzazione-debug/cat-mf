const compression = require('compression');
const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
// compress all responses
app.use(compression());

const host = '0.0.0.0';
const port = 8080;

app.use(cors());
app.use(express.static(__dirname + '/dist/remote'));

app.get('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const index = path.join(__dirname, '/', 'dist', 'index.html');
  res.sendFile(index);
});

// ---- SERVE APPLICATION PATHS ---- //

app.listen(port, host, function () {
  console.log('Server started on: ' + host + ':' + port);
});
