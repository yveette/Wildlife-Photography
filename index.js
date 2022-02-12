const express = require('express');
const { create: handlebars } = require('express-handlebars');
const session = require('express-session');

start();

async function start() {
    const app = express();

    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }).engine);
    app.set('view engine', '.hbs');

    app.use('/static', express.static('static'));

    app.get('/', (req, res) => res.render('home', { layout: false }));

    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}