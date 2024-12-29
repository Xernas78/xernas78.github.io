let cursor = document.getElementById("cursor");
let pointer = document.getElementById("pointer");
let cursorSize = 50;
let mouseX = 0;
let mouseY = 0;
let xp = 0;
let yp = 0;
let on = false;

function torch(enabling) {
    if (enabling) {
        cursorSize = 100;
        cursor.style.width = cursorSize + "px";
        cursor.style.height = cursorSize + "px";
        pointer.style.width = 0 + "px";
        pointer.style.height = 0 + "px";
        xp += ((mouseX - xp) / 20);
        yp += ((mouseY - yp) / 20);
        cursor.style.top = yp + "px"
        cursor.style.left = xp + "px"
        pointer.style.top = 0 + "px"
        pointer.style.left = 0 + "px"
        on = true;
    } else {
        cursorSize = 50;
        cursor.style.width = cursorSize + "px";
        cursor.style.height = cursorSize + "px";
        pointer.style.width = (cursorSize / 5) + "px";
        pointer.style.height = (cursorSize / 5) + "px";
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
        cursorSize = 70;
        cursor.style.width = cursorSize + "px";
        cursor.style.height = cursorSize + "px";
        pointer.style.width = (cursorSize / 5) + "px";
        pointer.style.height = (cursorSize / 5) + "px";
        cursor.style.top = yp + "px";
        cursor.style.left = xp + "px";
    });
    document.getElementsByClassName("hoverable")[i].addEventListener("mouseleave", function () {
        if (on) return;
        cursorSize = 50;
        cursor.style.width = cursorSize + "px";
        cursor.style.height = cursorSize + "px";
        pointer.style.width = (cursorSize / 5) + "px";
        pointer.style.height = (cursorSize / 5) + "px";
        cursor.style.top = yp + "px";
        cursor.style.left = xp + "px";
    });
}

document.documentElement.addEventListener("mousemove", ev => {
    cursor.style.visibility = "visible"
    pointer.style.visibility = "visible"
    mouseY = ev.pageY - cursorSize / 2
    mouseX = ev.pageX - cursorSize / 2
    pointer.style.top = ev.pageY + "px"
    pointer.style.left = ev.pageX + "px"
})

document.documentElement.addEventListener("mousedown", (ev) => {
    if (on) return;
    cursorSize = 40
    cursor.style.width = cursorSize + "px"
    cursor.style.height = cursorSize + "px"
    pointer.style.width = (cursorSize / 5) + "px";
    pointer.style.height = (cursorSize / 5) + "px";
    mouseY = ev.pageY - cursorSize / 2
    mouseX = ev.pageX - cursorSize / 2
    xp += ((mouseX - xp) / 20);
    yp += ((mouseY - yp) / 20);
    cursor.style.top = yp + "px"
    cursor.style.left = xp + "px"
})

document.documentElement.addEventListener("mouseup", (ev) => {
    if (on) return;
    cursorSize = 50
    cursor.style.width = cursorSize + "px"
    cursor.style.height = cursorSize + "px"
    pointer.style.width = (cursorSize / 5) + "px";
    pointer.style.height = (cursorSize / 5) + "px";
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