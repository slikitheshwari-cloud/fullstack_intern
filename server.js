const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// JavaScript array to store blogs
let blogs = [];

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Blog API");
});

// Get all blogs
app.get("/blogs", (req, res) => {
    res.json(blogs);
});

// Add a new blog
app.post("/blogs", (req, res) => {

    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
        return res.status(400).json({
            message: "Title and Content are required."
        });
    }

    const newBlog = {
        id: blogs.length + 1,
        title,
        content
    };

    blogs.push(newBlog);

    res.status(201).json({
        message: "Blog added successfully!",
        blog: newBlog
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});