const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root URL ("/") to serve afdrive.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'afdrive.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
