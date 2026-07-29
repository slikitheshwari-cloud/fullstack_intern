const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// GET Route
app.get("/", (req, res) => {
    res.send("Welcome to My Express Server!");
});

// GET Route
app.get("/about", (req, res) => {
    res.send("This is the About Page.");
});

// POST Route
app.post("/blog", (req, res) => {

    const blog = req.body;

    res.json({
        message: "Blog received successfully!",
        data: blog
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});