const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors()).use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello From Server Side');
})

app.listen(5000, () => {
    console.log('Listening on port 5000');
})