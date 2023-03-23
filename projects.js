//importing projects from data file
const projects = [
    {
        title: "Project 1",
        description: "Some Description",
        gitHubLink: "",
        websiteLink: "",
        image: "./../assets/project-images/",
    },
    {
        title: "Project 2",
        description: "Some Description",
        gitHubLink: "",
        websiteLink: "",
        image: "./../assets/project-images/",
    },
    {
        title: "Project 3",
        description: "Some Description",
        gitHubLink: "",
        websiteLink: "",
        image: "./../assets/project-images/",
    },
    {
        title: "Project 4",
        description: "Some Description",
        gitHubLink: "",
        websiteLink: "",
        image: "./../assets/project-images/",
    },
    {
        title: "Project 5",
        description: "Some Description",
        gitHubLink: "",
        websiteLink: "",
        image: "./../assets/project-images/",
    },
];
// select the tag where the projects will be displayed
const projectsSection = document.body.querySelector(".projects");

// iterate through projects file to display all projects within the file
const renderProjects = (section, projects) => {
    const innerHTML = (project) => {
        return `
        <div class="projects__container">
            <img src="${project.image}" alt="${project.title}" />
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <div class="icon-container">
                <a href="${project.gitHubLink}">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="${project.websiteLink}">
                    <i class="fa-solid fa-paper-plane"></i>
                </a>
            </div>
        </div>`;
    };
    return projects.map((project) => {
        section.innerHTML += innerHTML(project);
    });
};

renderProjects(projectsSection, projects);
