document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});



// JSON array containing the projectcard data
const projectcardData = [
    { image: "https://via.placeholder.com/320x180", title: "Project Title 1", description: "Description for project 1", projecttags: ["HTML", "CSS", "JavaScript"], page: "projectpage1.html" },
    { image: "https://via.placeholder.com/320x180", title: "Project Title 2", description: "Description for project 2", projecttags: ["React", "Node.js", "MongoDB"], page: "projectpage2.html" },
    { image: "https://via.placeholder.com/320x180", title: "Project Title 3", description: "Description for project 3", projecttags: ["Python", "Django", "REST API"], page: "pythonproject1.html" },
    { image: "https://via.placeholder.com/320x180", title: "Project Title 4", description: "Description for project 4", projecttags: ["Flutter", "Dart", "iOS"], page: "flutterproject1.html" },
    { image: "https://via.placeholder.com/320x180", title: "Project Title 5", description: "Description for project 5", projecttags: ["Vue", "Nuxt", "Firebase"], page: "vueproject1.html" }
];

// Function to filter projectcards based on search query
function searchProjects(query) {
    const recommendations = document.getElementById('search-recommendations');
    recommendations.innerHTML = ''; // Clear previous recommendations

    const filteredProjects = projectcardData.filter(project => {
        const searchText = query.toLowerCase();
        return project.title.toLowerCase().includes(searchText) || project.projecttags.some(tag => tag.toLowerCase().includes(searchText));
    });

    // Display filtered recommendations
    filteredProjects.forEach(project => {
        const recommendationItem = document.createElement('div');
        recommendationItem.classList.add('recommendation-item');

        // Create language icon element
        const languageIcon = document.createElement('img');
        languageIcon.classList.add('language-icon');

        // Set the icon based on the project tags
        if (project.projecttags.includes("HTML")) {
            languageIcon.src = "https://cdn.worldvectorlogo.com/logos/java-4.svg"; // Use actual path for your icons
        } else if (project.projecttags.includes("Python")) {
            languageIcon.src = "https://cdn.worldvectorlogo.com/logos/python-5.svg";
        } else if (project.projecttags.includes("React")) {
            languageIcon.src = "https://cdn.worldvectorlogo.com/logos/react-2.svg";
        } else if (project.projecttags.includes("Vue")) {
            languageIcon.src = "/assets/images/icons8-vue-js.svg"; // Add Vue icon
        } else if (project.projecttags.includes("Flutter")) {
            languageIcon.src = "/assets/images/icons8-flutter.svg"; // Add Flutter icon
        }

        // Create project title element
        const projectTitle = document.createElement('span');
        projectTitle.innerText = project.title;

        // Add click event to redirect to the project page
        recommendationItem.addEventListener('click', () => {
            window.location.href = project.page;
        });

        // Append language icon and title to the recommendation item
        recommendationItem.appendChild(languageIcon);
        recommendationItem.appendChild(projectTitle);
        recommendations.appendChild(recommendationItem);
    });
}

// Event listener for search input
document.querySelector('.search-container input').addEventListener('input', (event) => {
    const query = event.target.value;
    if (query.trim()) {
        searchProjects(query);
    } else {
        document.getElementById('search-recommendations').innerHTML = ''; // Clear recommendations if search is empty
    }
});
