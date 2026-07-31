const form = document.getElementById("blogForm");
const title = document.getElementById("title");
const content = document.getElementById("content");
const message = document.getElementById("message");
const container = document.getElementById("blogContainer");

form.addEventListener("submit", function(event){

    event.preventDefault();

    if(title.value.trim()==="" || content.value.trim()===""){

        message.style.color="red";
        message.textContent="Please fill all fields.";

        return;
    }

    message.style.color="green";
    message.textContent="Blog Added Successfully!";

    const card=document.createElement("div");

    card.classList.add("blog-card");

    card.innerHTML=`

    <div class="blog-content">

    <h2>${title.value}</h2>

    <p>${content.value}</p>

    <a href="#" class="btn-small">Read More</a>

    </div>

    `;

    container.prepend(card);

    form.reset();

});