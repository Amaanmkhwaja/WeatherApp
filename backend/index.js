const express = require('express');
const app = express();
app.listen(4000, () => console.log('listening at 4000'));
app.use(express.static('public'));