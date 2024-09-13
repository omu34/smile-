let next = document.getElementById("next");
let prev = document.getElementById("prev");
let defaultTransform = 0;

function goNext() {
    defaultTransform = defaultTransform - 298;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.2)
        defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 298;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

let next2 = document.getElementById("next2");
let prev2 = document.getElementById("prev2");
let defaultTransform2 = 0;

function goNext2() {
    var sizeDiv = document.getElementById("sizeDiv").offsetWidth + 4;
    defaultTransform2 = defaultTransform2 - sizeDiv;
    var slider = document.getElementById("slider2");
    if (Math.abs(defaultTransform2) >= slider.scrollWidth / 1.2)
        defaultTransform2 = 0;
    slider.style.transform = "translateX(" + defaultTransform2 + "px)";
}

function goPrev2() {
    var sizeDiv = document.getElementById("sizeDiv").offsetWidth + 4;
    var slider = document.getElementById("slider2");
    if (Math.abs(defaultTransform2) === 0) defaultTransform2 = 0;
    else defaultTransform2 = defaultTransform2 + sizeDiv;
    slider.style.transform = "translateX(" + defaultTransform2 + "px)";
}
next2.addEventListener("click", goNext2);
prev2.addEventListener("click", goPrev2);