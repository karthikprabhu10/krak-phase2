document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});



// JSON array containing the projectcard data
const projectcardData = [
    { image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/de306b0e-e296-4d99-a1df-8a50cb8aea8a/dgw04zc-20401851-08fc-4fd3-9354-85bc33532c18.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RlMzA2YjBlLWUyOTYtNGQ5OS1hMWRmLThhNTBjYjhhZWE4YVwvZGd3MDR6Yy0yMDQwMTg1MS0wOGZjLTRmZDMtOTM1NC04NWJjMzM1MzJjMTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5IB-TA1AinDGQ2jq4lXXYn7gB8-39MShGXFY_eLBQh8", title: "AI image captioning", description: "This is a Streamlit-based web application that uses a BLIP (Bootstrapped Language-Image Pre-training) model for generating captions based on user-uploaded images. The app allows users to upload images in JPG, JPEG, or PNG formats, and it provides an AI-generated caption for the uploaded image.", projecttags: ["Python", "BLIP", "Streamlit"], page: "projectpage1.html" },



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
