const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// For any other request, send the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
