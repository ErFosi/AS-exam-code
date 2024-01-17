const express = require('express');
const app = express();
const port = 3000;
const modificacion = 1

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app;  // Export the app for testing purposes
