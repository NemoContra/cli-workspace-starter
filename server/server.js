const fs = require('fs');
const path = require('path');

const flights = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')).toString());
const app = require('express')();

const port = process.env.PORT || 3000;
const delay = 3000;

app.get('/api/flight', (req, res) => {
  setTimeout(() => {
    res.json(flights);
  }, delay);
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
