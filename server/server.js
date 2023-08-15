const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3100;

app.use(cors());
app.use(bodyParser.json());


// Liste des astronautes
const astronauts = [];

// Route pour récupérer la liste des astronautes
app.get('/astronauts', (req, res) => {
    res.json(astronauts);
});

// Route pour ajouter un astronaute
app.post('/astronauts', (req, res) => {
    const astronaut = req.body;
    astronauts.push(astronaut);
    res.json(astronaut);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});