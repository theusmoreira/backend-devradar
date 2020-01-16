const expresss = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = expresss();

mongoose.connect( 'mongodb+srv://matheus:matheus@cluster0-wfzcl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex :  true,
} );

app.use(expresss.json());
app.use(routes);

app.listen(3333);

