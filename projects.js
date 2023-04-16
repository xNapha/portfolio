//importing projects from data file
const projects = [
    {
        title: "App-Who-le OS",
        description: "Recreating Mac OS on a browser",
        gitHubLink: "https://github.com/xNapha/fake-os",
        websiteLink: "https://xnapha.github.io/fake-os/",
        image: "./../assets/project-images/fake-os.png",
    },
    {
        title: "Morse Code Translator",
        description: "Translate the popular encrypted alphabet, morse code.",
        gitHubLink: "https://github.com/xNapha/morse-code-translator",
        websiteLink: "https://xnapha.github.io/morse-code-translator/",
        image: "./../assets/project-images/morse-code-translator.png",
    },
    {
        title: "Google Books",
        description: "Search engine only for books",
        gitHubLink: "https://github.com/xNapha/google-books",
        websiteLink: "https://xnapha.github.io/google-books/",
        image: "./../assets/project-images/google-books.png",
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
    {
        title: "Project 6",
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
                <a href="${project.gitHubLink}" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="${project.websiteLink}" target="_blank">
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
