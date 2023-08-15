const mongoose = require('mongoose');

const astronautSchema = new mongoose.Schema({
    name: String,
    age: Number,
    mission: String
});

module.exports = mongoose.model('Astronaut', astronautSchema);
