
const express = require('express');
const { engine } = require ('express-handlebars');
const app = express();

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './app/resources/views');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*"); //Cấp quyền cho client được truy cập để sử dụng tài nguyên, "*" là tất cả client.
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS, PATCH'); // Các phương thức của client khi gọi api
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //Content-Type: application/json định dạng kiểu dữ liệu json
    res.header('Access-Control-Allow-Credentials', true);
    next();
}
app.use(allowCrossDomain);

require('./app/routes/home.route')(app);

app.listen(8000, function(){
    console.log('Server running: http://localhost:8000');
});