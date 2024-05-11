const express = require('express');
const port = process.env.PORT || 3000;

let app = express();

app.use('/api', require('./api/todos').router);

app = app.listen(port, () => {
  console.log('running');
});

module.exports = app;
