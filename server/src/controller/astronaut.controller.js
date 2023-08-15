const { createAstronaut, findAstronaut, findAndUpdateAstronaut, getAstronauts, deleteAstronaut } = require("../service/astronaut.service");

async function createAstronautHandler(req, res) {
    const astronaut = await createAstronaut(req.body);

    return res.send(astronaut);
}

async function updateAstronautHandler(req, res) {
    const astronautId = req.params.id;
    const astronaut = await findAstronaut({ _id: astronautId });

    if (!astronaut) {
        return res.status(404).send({ error: 'Astronaut not found!' });
    }

    const updatedAstronaut = await findAndUpdateAstronaut({ _id: astronautId }, req.body);

    return res.send(updatedAstronaut);
}

async function getAstronautsHandler(_, res) {
    const astronauts = await getAstronauts();

    return res.send(astronauts);
}

async function findAstronautHandler(req, res) {
    const astronautId = req.params.id;

    const astronaut = await findAstronaut({ _id: astronautId });

    if (!astronaut) {
        return res.status(404).send({ error: 'Astronaut not found!' });
    }

    return res.send(astronaut);
}

async function deleteAstronautHandler(req, res) {
    const astronautId = req.params.id;

    const astronaut = await findAstronaut({ _id: astronautId });

    if (!astronaut) {
        return res.status(404).send({ error: 'Astronaut not found!' });
    }

    await deleteAstronaut({ _id: astronautId });

    return res.sendStatus(200);
}

module.exports = {
    createAstronautHandler,
    getAstronautsHandler,
    updateAstronautHandler,
    deleteAstronautHandler,
    findAstronautHandler
};