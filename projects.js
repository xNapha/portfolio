//importing projects from data file
const projects = [
    {
        title: "App-Who-le OS",
        description:
            "Recreation of the Mac OS system on a web browser. Built with JS, HTML, and SASS/CSS",
        gitHubLink: "https://github.com/xNapha/fake-os",
        websiteLink: "https://xnapha.github.io/fake-os/",
        image: "./assets/project-images/fake-os.png",
    },
    {
        title: "Morse Code Translator",
        description:
            "Translator that can translate morse code to english and vice versa. Built with JS, HTML, and SASS/CSS",
        gitHubLink: "https://github.com/xNapha/morse-code-translator",
        websiteLink: "https://xnapha.github.io/morse-code-translator/",
        image: "./assets/project-images/morse-code-translator.png",
    },
    {
        title: "Google Books",
        description:
            "Search engine that makes use of the google books api.  Built with React SASS/CSS",
        gitHubLink: "https://github.com/xNapha/google-books",
        websiteLink: "https://xnapha.github.io/google-books/",
        image: "./assets/project-images/google-books.png",
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
