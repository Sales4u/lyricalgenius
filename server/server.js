// Express backend server
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/tracks', (req, res) => {
    res.json([{ title: 'Track 1' }, { title: 'Track 2' }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});