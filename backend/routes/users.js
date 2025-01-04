const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Dummy-Daten (wird später durch Datenbank ersetzt)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', fields: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', fields: 3 },
];

// Middleware für JSON-Parsing
router.use(bodyParser.json());

// Benutzer abrufen
router.get('/', (req, res) => res.json(users));

// Benutzer hinzufügen
router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Benutzer aktualisieren
router.put('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

// Benutzer löschen
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.status(204).send();
});

module.exports = router;
