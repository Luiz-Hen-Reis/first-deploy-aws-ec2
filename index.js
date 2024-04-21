const express = require('express');
const app = express();
const port = 3000;

app.get('/teste', (req, res) => {
  res.status(200).json({ msg: 'API online' });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
