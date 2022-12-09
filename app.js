const express = require('express');
const app = express();

app.get('/', (rep, res) => {
    return res.send('Hello Worlds');
})

app.listen(8000, function(){
    console.log('Server running: http://localhost:8000');
});