const express = require('express');
const app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('temp', {
        time: Date()
    });
})
app.listen(3000, () => {
    console.log('connect');
})