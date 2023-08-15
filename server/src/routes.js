const { createAstronautHandler, getAstronautsHandler, updateAstronautHandler, deleteAstronautHandler } = require("./controller/astronaut.controller");
const validateResource = require('./middleware/validateResource');
const createAstronautSchema = require("./schema/astronaut.schema");


function routes(app) {
    app.get('/astronauts', getAstronautsHandler);

    app.post('/astronauts', validateResource(createAstronautSchema), createAstronautHandler);

    app.put('/astronauts/:id', validateResource(createAstronautSchema), updateAstronautHandler);

    app.delete('/astronauts/:id', deleteAstronautHandler);
}

module.exports = routes;