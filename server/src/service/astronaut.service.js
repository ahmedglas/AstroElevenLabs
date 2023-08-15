
const AstronautModel = require('../models/astronaut.model');

async function createAstronaut(input) {
    try {
        return await AstronautModel.create(input);
    } catch (e) {
        throw e;
    }
}

async function findAstronaut(query) {
    try {
        return await AstronautModel.findOne(query);
    } catch (e) {
        throw e;
    }
}

async function getAstronauts() {
    return await AstronautModel.find();
}

async function findAndUpdateAstronaut(query, update) {
    return await AstronautModel.findOneAndUpdate(query, update);
}

async function deleteAstronaut(query) {
    return await AstronautModel.deleteOne(query);
}

module.exports = {
    createAstronaut,
    findAstronaut,
    getAstronauts,
    findAndUpdateAstronaut,
    deleteAstronaut
};