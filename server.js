const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('public'));

// ================= ROUTES =================

// Middleware Exp
app.get('/api/public', (req, res) => {
    res.send("Public Route Working");
});

app.get('/api/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (token === "valid_token") {
        res.send("Protected Access Granted");
    } else {
        res.status(401).send("Unauthorized");
    }
});

// JWT Exp (dummy)
app.post('/api/login', (req, res) => {
    res.json({ token: "valid_token" });
});

// ACID Exp (dummy for UI)
app.get('/api/acid', (req, res) => {
    res.json({ message: "Transaction Successful (Demo)" });
});

// ================= START =================
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});