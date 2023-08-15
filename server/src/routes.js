

function routes(app) {
    app.get('/astronauts');

    app.post('/astronauts');

    app.put('/astronauts/:id');

    app.delete('/astronauts/:id');
}

module.exports = routes;