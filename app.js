const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('İNDEX SAYFASI');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
