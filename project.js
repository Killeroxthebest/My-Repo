
// store variables and list//
let currentProject = document.querySelector(".projects");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");

let projects = [
    "ChangeProject/int-u2-project-starter-code-2-1/index.html",
    "BeeProject/int-u3-project-starter-code/index.html",
    "PlaylistProject/flw1-playlist-22-23-starter/index.html"
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