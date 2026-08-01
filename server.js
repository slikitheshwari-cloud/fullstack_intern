const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));
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

// Update a blog
app.put("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const { title, content } = req.body;

    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    if (!title || !content) {
        return res.status(400).json({
            message: "Title and Content are required."
        });
    }

    blog.title = title;
    blog.content = content;

    res.json({
        message: "Blog updated successfully!",
        blog
    });

});

// Delete a blog
app.delete("/blogs/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = blogs.findIndex(blog => blog.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Blog not found"
        });
    }

    const deletedBlog = blogs.splice(index, 1);

    res.json({
        message: "Blog deleted successfully!",
        blog: deletedBlog[0]
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});