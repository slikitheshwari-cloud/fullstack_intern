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
                <h3>${blog.title}</h3>
                <p>${blog.content}</p>
            `;

            blogList.appendChild(card);

        });

    })
    .catch(error => console.log(error));