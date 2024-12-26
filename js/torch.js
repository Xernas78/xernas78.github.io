let cursor = document.getElementById("cursor");
let cursorSize = 40;
let mouseX = 0;
let mouseY = 0;
let xp = 0;
let yp = 0;
let on = false;

function torch(enabling) {
    if (enabling) {
        cursor.style.width = "100px";
        cursor.style.height = "100px";
        cursorSize = 100;
        xp += ((mouseX - xp) / 20);
        yp += ((mouseY - yp) / 20);
        cursor.style.top = yp + "px"
        cursor.style.left = xp + "px"
        on = true;
    } else {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursorSize = 40;
        xp += ((mouseX - xp) / 20);
        yp += ((mouseY - yp) / 20);
        cursor.style.top = yp + "px"
        cursor.style.left = xp + "px"
        on = false;
    }
}

for (let i = 0; i < document.getElementsByClassName("hoverable").length; i++) {
    document.getElementsByClassName("hoverable")[i].addEventListener("mouseover", function () {
        if (on) return;
        cursor.style.width = "50px";
        cursor.style.height = "50px";
        cursorSize = 50;
        cursor.style.top = yp + "px";
        cursor.style.left = xp + "px";
    });
    document.getElementsByClassName("hoverable")[i].addEventListener("mouseleave", function () {
        if (on) return;
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursorSize = 40;
        cursor.style.top = yp + "px";
        cursor.style.left = xp + "px";
    });
}

document.documentElement.addEventListener("mousemove", ev => {
    cursor.style.visibility = "visible"
    mouseY = ev.pageY - cursorSize / 2
    mouseX = ev.pageX - cursorSize / 2
})

document.documentElement.addEventListener("mousedown", (ev) => {
    if (on) return;
    cursor.style.width = "30px"
    cursor.style.height = "30px"
    cursorSize = 30
    mouseY = ev.pageY - cursorSize / 2
    mouseX = ev.pageX - cursorSize / 2
    xp += ((mouseX - xp) / 20);
    yp += ((mouseY - yp) / 20);
    cursor.style.top = yp + "px"
    cursor.style.left = xp + "px"
})

document.documentElement.addEventListener("mouseup", (ev) => {
    if (on) return;
    cursor.style.width = "40px"
    cursor.style.height = "40px"
    cursorSize = 40
    mouseY = ev.pageY - cursorSize / 2
    mouseX = ev.pageX - cursorSize / 2
    xp += ((mouseX - xp) / 20);
    yp += ((mouseY - yp) / 20);
    cursor.style.top = yp + "px"
    cursor.style.left = xp + "px"
})

setInterval(function () {
    xp += ((mouseX - xp) / 20);
    yp += ((mouseY - yp) / 20);
    cursor.style.top = yp + "px"
    cursor.style.left = xp + "px"
}, 2);