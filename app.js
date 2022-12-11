
const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './app/resources/views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8000, function(){
    console.log('Server running: http://localhost:8000');
});