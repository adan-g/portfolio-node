const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const path = require("path");
const flash = require('connect-flash');
const session = require('express-session');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use((req,res,next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
})

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({entended:false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

//Routing
app.use('/', homeRoutes);

const port = 1000;

app.listen(port, () => {
    console.log(`Server Up! ${port}`)
})