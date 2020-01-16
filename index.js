const expresss = require('express');

const app = expresss();

app.get('/', (req, res) => {
    return res.json({ message: 'Ola mundo' });
});

app.listen(3333);

