
function buttonPress() {
    let navIframe = document.getElementsByClassName('nav');
    navIframe.style.width = 1080 + 'px';
    navIframe.style.height = 100 + 'px';
    navIframe.setAttribute('src', 'nav.html');
}
// js for buttons and images
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let carImage = document.querySelector(".cImage");

let images = ["asset/Mays_2.jpg",
    "asset/4563.jpg",
    "asset/4640.jpg",
    "asset/4641.jpg",
    "asset/4645.jpg"]
let imageNum = 0;
button1.addEventListener('click', function () {
    imageNum = imageNum - 1;
    if (imageNum < 0) {
        imageNum = 4
    }
    carImage.src = images[imageNum]
});
button2.addEventListener('click', function () {
    imageNum = imageNum + 1
    if (imageNum > 4) {
        imageNum = 0
    }
    carImage.src = images[imageNum]
});


let currentProject = document.querySelector(".projects");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");
let projects = ["ChangeProject/int-u2-project-starter-code-2-1/index.html",
    "BeeProject/int-u3-project-starter-code/Beeclicker.html",
    "PlaylistProject/flw1-playlist-22-23-starter/index.html"]
let projectNum = 0;
button3.addEventListener('click', function () {
    projectNum = projectNum - 1;
    if (projectNum < 0) {
        projectNum = 3
    }
    carImage.src = projects[projectNum]
});
button4.addEventListener('click', function () {
    projectNum = projectNum + 1
    if (projectNum > 3) {
        projectNum = 0
    }
    carImage.src = projects[projectNum]
});