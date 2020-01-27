const Pets = require('./controllers/Pets.controller');

module.exports = app => {
    app.get('/api/pets', Pets.getAll);
    app.post('/api/pets', Pets.create);
    app.get('/api/pets/:_id', Pets.getOne);
    app.post('/api/pets/:_id', Pets.update);
    app.delete('/api/pets/:_id', Pets.remove);
    app.delete('/api/pets/:_id', Pets.adopt);
    app.get('/api/pets/:_id', Pets.showOne);
}
