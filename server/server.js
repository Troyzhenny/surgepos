const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const PORT = 8000;

// Endpoints
app.get('/', (req, res) => {
    console.log('endpoint num1 hit', req.method)
    res.sendStatus(201)
});

app.listen(PORT, () => console.log(`server has started on ${PORT}`));
