// -_- ;oading Page -_-
let loading = document.getElementById("loading");
window.onload = (_) => {
    loading.style.display = "none";
};
// -_- open and close nav -_-
let navBar = document.getElementById("navBar");
let openNavBtn = document.getElementById("openNav");
let closeNavBtn = document.getElementById("closeNav");
openNavBtn.onclick = (_) => {
    navBar.style.left = 0;
};
closeNavBtn.onclick = (_) => {
    navBar.style.left = "-100%";
};
// -_- backGround navbar on scroll -_-
let header = document.getElementById("header");
let body = document.body;
body.onscroll = (_) => {
    if (window.scrollY > 60) {
        header.style.backgroundColor = "#1e1e1e";
    } else {
        header.style.backgroundColor = "transparent";
    }
};
// -_- Video -_-
let openVideo = document.getElementById("openVideo");
let closeVideo = document.getElementById("closeVideo");
let video = document.getElementById("video");

openVideo.onclick = _ => {
    video.style.width = '70%';
}
closeVideo.onclick = _ => {
    video.style.width = '0';
}
// -_- question -_-

let askBox = document.querySelectorAll(".ask_box");
askBox.forEach(function (ele) {
    ele.onclick = function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active")
        }else {
            this.classList.add("active")
        }
    }
})
// -_- copyRight -_-
let copyRight = document.getElementById("copyRight");
copyRight.innerHTML += `SPYRO ${new Date().getFullYear()}. All rights reserved.`
