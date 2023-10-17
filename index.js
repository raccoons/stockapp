// Stock Market App

const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');
const request = require('request');

const PORT = process.env.PORT || 5000;

// API KEY: pk_e1a3792c57f244dbb3384af1fd202a44
// create call_api function
function call_api(finishedAPI) {
    request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_e1a3792c57f244dbb3384af1fd202a44', { json: true }, (err, res, body) => {
    if (err) {return console.log(err);}
    if (res.statusCode === 200) {
        //console.log(body);
        finishedAPI(body);
    };
});

}



// Set Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherStuff = "Hello more stuff";
// Set handlebar routes
app.get('/', (req, res) => {
    call_api(function(doneAPI) {
        res.render('home', {
            stock: doneAPI
        });
    });
});

// create about page route
app.get('/about.html', (req, res) => {
    res.render('about');
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server listing on port ${PORT}`));

