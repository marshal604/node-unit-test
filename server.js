const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/user', (req, res) => {
    res.send({
        name: 'YUR',
        age: 25
    })
});

app.listen(3000, () => {
    console.log('listening app on port 3000');
})

module.exports.app = app;