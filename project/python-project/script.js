// JSON array containing the projectcard data
const projectcardData = [
    {
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de306b0e-e296-4d99-a1df-8a50cb8aea8a/dgw04zc-20401851-08fc-4fd3-9354-85bc33532c18.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlMzA2YjBlLWUyOTYtNGQ5OS1hMWRmLThhNTBjYjhhZWE4YVwvZGd3MDR6Yy0yMDQwMTg1MS0wOGZjLTRmZDMtOTM1NC04NWJjMzM1MzJjMTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5IB-TA1AinDGQ2jq4lXXYn7gB8-39MShGXFY_eLBQh8",
        title: "AI image captioning",
        description: "This is a brief description for projectcard 1. It summarizes the contentThis is a Streamlit-based web application that uses a BLIP (Bootstrapped Language-Image Pre-training) model for generating captions based on user-uploaded images. The app allows users to upload images in JPG, JPEG, or PNG formats, and it provides an AI-generated caption for the uploaded image.",
        projecttags: ["Python", "BLIP", "Streamlit","HuggingFace"],
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
