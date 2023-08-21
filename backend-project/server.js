const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
const secretKey = 'yourSecretKey'; // Replace with a strong secret key

// Simulated user data (replace with a database)
const users = [];

app.use(express.json());

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username, password: hashedPassword });
        res.status(201).send('User registered successfully.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// User login and token generation
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).send('Invalid credentials.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error.');
    }
});

// Validate token
app.get('/validate', (req, res) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).send('No token provided.');
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).send('Token validation failed.');
        }
        res.send('Token is valid.');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
