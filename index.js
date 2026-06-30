
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

let images = ["asset/Mays_2.jpg", "asset/nai.png"]
let imageNum = 0;
button1.addEventListener('click', function () {
    imageNum = imageNum - 1;
    if (imageNum < 0) {
        imageNum = images.length-1
    }
    carImage.src=images[imageNum]
});
button2.addEventListener('click', function () {
    imageNum = imageNum + 1
    if (imageNum > images.length-1) {
        imageNum = 0
    }
   carImage.src=images[imageNum]
});