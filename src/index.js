const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('meu primeiro servidor com o express - Alberto Paim');
});

app.listen(3000);