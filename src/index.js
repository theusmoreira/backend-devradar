const expresss = require('express');
const mongoose = require('mongoose');

const app = expresss();

mongoose.connect( 'mongodb+srv://matheus:matheus@cluster0-wfzcl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} );

app.use(expresss.json());

// Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:

//query params: req.query (filtros, ordenação, paginação, ...)
//Route Params: req.params (Identificar um recurso na alteração ou remoção)
//Body: req.body (Dados para criação ou alteração de um registro)

app.post('/users', (req, res) => {
    console.log(req.body)
    return res.json({ message: 'Ola mundo' });
});

app.listen(3333);

