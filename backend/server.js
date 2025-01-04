const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Aktiviert CORS
app.use(express.json()); // Aktiviert JSON-Parsing für POST/PUT-Anfragen

// Benutzer-Routen
app.use('/api/users', require('./routes/users'));

// Root-Endpunkt
app.get('/', (req, res) => res.send('Admin Backend Running'));

// Server starten
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
