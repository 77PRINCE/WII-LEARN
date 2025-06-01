const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'NEW_UP')));

// Route to serve index.html on GET request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'NEW_UP', 'index.html'));
});

// POST route to create a payment (Nkwa Pay API request)
app.post('/create-payment', async (req, res) => {
    try {
        const response = await axios.post('https://api.mynkwa.com/payment', {
            amount: req.body.amount,  // Payment amount from frontend
            currency: 'CFA',          // Set your currency
        }, {
            headers: {
                'Authorization': `Bearer YOUR_NKWA_PAY_API_KEY`, // Add your API key here
            }
        });

        res.status(200).json(response.data); // Send Nkwa Pay API response to frontend
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while processing payment.' });
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
