
// store variables and list//
let currentProject = document.querySelector(".projects");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");

let projects = [
    "https://killeroxthebest.github.io/int-u2-project-starter-code-2/",
    "https://killeroxthebest.github.io/int-u3-project-starter-code/",
    "https://killeroxthebest.github.io/flw1-playlist-22-23-starter/"
];

let projectNum = 0;

function updateProject(direction) {
    projectNum = (projectNum + direction + projects.length) % projects.length;
    currentProject.src = projects[projectNum];
}

button3.addEventListener("click", function () {
    updateProject(-1);
});

button4.addEventListener("click", function () {
    updateProject(1);
});