const blogList = document.getElementById("blogList");

fetch("http://localhost:3000/blogs")
    .then(response => response.json())
    .then(data => {

        if (data.length === 0) {
            blogList.innerHTML = "<p>No blogs available.</p>";
            return;
        }

        data.forEach(blog => {

            const card = document.createElement("div");

            card.className = "blog-card";

            card.innerHTML = `
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600" alt="Blog Image">

                <div class="blog-content">

                    <h2>${blog.title}</h2>

                    <p class="date">
                        📅 July 2026 | By Admin
                    </p>

                    <p>${blog.content}</p>

                    <a href="#" class="btn-small">Read More</a>

                </div>
            `;

            blogList.appendChild(card);

        });

    })
    .catch(error => console.log(error));