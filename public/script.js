const form = document.getElementById("blogForm");
const message = document.getElementById("message");
const container = document.getElementById("blogContainer");

// Load all blogs
async function loadBlogs() {
    try {
        const response = await fetch("http://localhost:3000/blogs");
        const blogs = await response.json();

        container.innerHTML = "";

        blogs.forEach(blog => {

            const card = document.createElement("div");
            card.className = "blog-card";

            card.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}">

                <div class="blog-content">

                    <h2>${blog.title}</h2>

                    <p class="date">
                        📅 August 2026 | By Admin
                    </p>

                    <p>${blog.content}</p>

                    <a href="#" class="btn-small">
                        Read More
                    </a>

                </div>
            `;

            container.appendChild(card);

        });

    } catch (error) {
        console.log(error);
    }
}

// Add new blog
form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const image = document.getElementById("image").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title === "" || image === "" || content === "") {

        message.style.color = "red";
        message.textContent = "Please fill all fields.";

        return;
    }

    const response = await fetch("http://localhost:3000/blogs", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            title,
            image,
            content

        })

    });

    const data = await response.json();

    message.style.color = "green";
    message.textContent = data.message;

    form.reset();

    loadBlogs();

});

loadBlogs();