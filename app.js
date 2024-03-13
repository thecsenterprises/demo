// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// Sample data for storing items
let items = [];

// Routes
// Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Get an item by ID
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(item => item.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json({ message: 'Item created successfully', item: newItem });
});

// Update an existing item
app.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = updatedItem;
        res.json({ message: 'Item updated successfully', item: updatedItem });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Delete an item
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    items = items.filter(item => item.id !== id);
    res.json({ message: 'Item deleted successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
