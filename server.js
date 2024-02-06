const express = require('express');
const app = express();
app.use(express.json());

app.post('/profile', (req, res) => {
    const {name, phone, email} = req.body;
    if (!name || !phone || !email) { 
        return res.status(400).json({ message: 'Invalid data provided' });
    }
    res.json({id: '9999'});
});

app.get('/profile', (req, res) => {
    res.json({name: 'AndrewLoh', phone: '89260666158', email: 'Kisser@mail.ru'});
});

app.put('/profile', (req, res) => {
    const {name, phone, email} = req.body;
    if (!name || !phone || !email) { 
        return res.status(400).json({ message: 'Invalid data provided' });
    }
    res.json(req.body); 
});

app.delete('/profile', (req, res) => {
    res.json({ message: 'Profile deleted successfully' });
});

app.use('/profile', (req, res, next) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

const server = app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = server;