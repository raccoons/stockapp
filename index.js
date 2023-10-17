// Stock Market App

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherStuff = "Hello more stuff";
// Set handlebar routes
app.get('/', (req, res) => {
    res.render('home', {
        stuff: otherStuff
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server listing on port ${PORT}`));

