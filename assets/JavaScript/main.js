// -_- ;oading Page -_-
let loading = document.getElementById("loading");
window.onload = _=> {
    loading.style.display= "none";
}


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
body.onscroll = _=> {
    if (window.scrollY > 60) {
        header.style.backgroundColor = '#1e1e1e'
    } else {
        header.style.backgroundColor = 'transparent'
    }
}