const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 4400;
const app = express();

app.use(cors());

// the __dirname is the current directory from where the script is running
app.use(express.static(path.resolve(__dirname, 'dist')));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port:', port);
});
