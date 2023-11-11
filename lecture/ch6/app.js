const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser('password'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('모든 요청에 실행');
    next();
});

app.get('/', (req, res) => {
    req.body
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(404).send('404지롱');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('에러');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행');
});