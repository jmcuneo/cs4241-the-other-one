const express = require("express");


// Create an express server
const app = express();

// Define a port
const PORT = 3000;

app.use(express.static(__dirname));

// Define a route
app.get("/", (req, res) => {
    res.sendFile(`index.html`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});