function addScrollEvent() {

    window.scrollTo(0, 0);
    navBarColor = document.getElementById("nav-color");
    navBarColorMobile = document.getElementById("nav-color-mobile");

    window.addEventListener("scroll", function () {
        if (this.window.pageYOffset > 0) {
            navBarColor.style = "background-color: black;";
            navBarColorMobile.style = "background-color: black;";
        } else {
            navBarColor.style = "background-color: transparent;";
            navBarColorMobile.style = "background-color: transparent;";
        }
    });
}

function toggleNavButton() {
    navbarExpanded = document.getElementById("nav-expanded");
    if (navbarExpanded.classList.contains("hide")) {
        navbarExpanded.classList.remove("hide");
        navbarExpanded.style = "display: flex;";
    } else {
        navbarExpanded.classList.add("hide");
        navbarExpanded.style = "display: none;";
    }
}

addScrollEvent();