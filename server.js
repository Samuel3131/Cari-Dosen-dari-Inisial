const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const route = require('./router/routes');

app.use('/', route);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
