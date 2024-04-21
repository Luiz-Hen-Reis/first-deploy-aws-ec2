const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/teste', (req, res) => {
  res.status(200).json({ msg: 'API online' });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
