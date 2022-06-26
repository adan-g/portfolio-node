const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const path = require("path");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

//Routing
app.use('/', homeRoutes);

const port = 1000;

app.listen(port, () => {
    console.log(`Server Up! ${port}`)
})