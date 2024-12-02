const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors()).use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello From Server Side');
})

http.listen(5000, () => {
    console.log('Listening on port 5000');
})