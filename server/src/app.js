const express = require('express');
const routes = require('./routes');
const config = require('config');
const connect = require('./utils/connect');
const logger = require('./utils/logger');
const cors = require('cors');


const port = config.get('port');
const app = express();

app.use(express.json());
app.use(cors());


// Start server
app.listen(port, async () => {
    logger.info(`Server is running on http://localhost:${port}`);

    await connect();

    routes(app);
});