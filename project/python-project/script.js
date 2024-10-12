// JSON array containing the projectcard data
const projectcardData = [
    {
        image: "https://via.placeholder.com/320x180",
        title: "projectcard Title 1",
        description: "This is a brief description for projectcard 1. It summarizes the content and invites users to download.",
        projecttags: ["HTML", "CSS", "JavaScript"],
        downloadLink: "/project/projects/python/py1.html"
    },
    {
        image: "https://via.placeholder.com/320x180",
        title: "projectcard Title 2",
        description: "This is a brief description for projectcard 2. It summarizes the content and invites users to download.",
        projecttags: ["React", "Node.js", "MongoDB"],
        downloadLink: "https://example.com/project2-download"
    },
    {
        image: "https://via.placeholder.com/320x180",
        title: "projectcard Title 3",
        description: "This is a brief description for projectcard 3. It summarizes the content and invites users to download.",
        projecttags: ["Python", "Django", "REST API"],
        downloadLink: "https://example.com/project3-download"
    },
    {
        image: "https://via.placeholder.com/320x180",
        title: "projectcard Title 4",
        description: "This is a brief description for projectcard 4. It summarizes the content and invites users to download.",
        projecttags: ["Flutter", "Dart", "iOS"],
        downloadLink: "https://example.com/project4-download"
    },
    {
        image: "https://via.placeholder.com/320x180",
        title: "projectcard Title 5",
        description: "This is a brief description for projectcard 5. It summarizes the content and invites users to download.",
        projecttags: ["Vue", "Nuxt", "Firebase"],
        downloadLink: "https://example.com/project5-download"
    }
];

// Function to create and append projectcards dynamically
function generateprojectcards() {
    const projectcardGrid = document.getElementById('projectcard-grid');

    projectcardData.forEach((projectcard) => {
        // Create projectcard element
        const projectcardElement = document.createElement('div');
        projectcardElement.classList.add('projectcard');

        // projectcard image section
        const projectcardImage = document.createElement('div');
        projectcardImage.classList.add('projectcard-image');
        const image = document.createElement('img');
        image.src = projectcard.image;
        image.alt = projectcard.title;
        projectcardImage.appendChild(image);

        // projectcard content section
        const projectcardContent = document.createElement('div');
        projectcardContent.classList.add('projectcard-content');

        const projectcardTitle = document.createElement('h2');
        projectcardTitle.classList.add('projectcard-title');
        projectcardTitle.innerText = projectcard.title;

        const projectcardDescription = document.createElement('p');
        projectcardDescription.classList.add('projectcard-description');
        projectcardDescription.innerText = projectcard.description;

        // projectcard projecttags section
        const projectcardprojecttags = document.createElement('div');
        projectcardprojecttags.classList.add('projectcard-projecttags');
        projectcard.projecttags.forEach(projecttag => {
            const projecttagElement = document.createElement('span');
            projecttagElement.classList.add('projecttag');
            projecttagElement.innerText = projecttag;
            projectcardprojecttags.appendChild(projecttagElement);
        });

        // Append content to projectcard content section
        projectcardContent.appendChild(projectcardTitle);
        projectcardContent.appendChild(projectcardDescription);
        projectcardContent.appendChild(projectcardprojecttags);

        // projectcard footer section with download button
        const projectcardFooter = document.createElement('div');
        projectcardFooter.classList.add('projectcard-footer');
        const downloadButton = document.createElement('a');
        downloadButton.classList.add('projectbtn');
        downloadButton.href = projectcard.downloadLink; // Set unique download link
        downloadButton.innerText = "Download";
        projectcardFooter.appendChild(downloadButton);

        // Append all sections to projectcard
        projectcardElement.appendChild(projectcardImage);
        projectcardElement.appendChild(projectcardContent);
        projectcardElement.appendChild(projectcardFooter);

        // Append projectcard to projectcard grid
        projectcardGrid.appendChild(projectcardElement);
    });
}

// Call the function to generate projectcards dynamically
generateprojectcards();


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
