// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let isValid = true;

    // Basic validation
    if (name.trim() === "") {
        alert("Please enter your name.");
        isValid = false;
    }

    if (email.trim() === "" || !validateEmail(email)) {
        alert("Please enter a valid email.");
        isValid = false;
    }

    if (message.trim() === "") {
        alert("Please enter your message.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // You can proceed to submit the form data to the server here
        // this.submit(); // Uncomment this if you want to actually submit the form
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Dynamic content loading for the Projects section
const projects = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    { title: "Project 3", description: "Description of project 3" },
    { title: "Project 4", description: "Description of project 4" },
];

function loadProjects() {
    const projectContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        
        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDesc);
        projectContainer.appendChild(projectCard);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);

// Interactive animations when scrolling or hovering
const animatedElements = document.querySelectorAll('.animated');

window.addEventListener('scroll', function () {
    const triggerBottom = window.innerHeight / 5 * 4;

    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
});

// Adding hover effect to projects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.classList.add('hovered');
    });

    card.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');
    });
});
