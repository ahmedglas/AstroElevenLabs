module.exports = {
    port: 3100,
    dbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/astronautes'
}