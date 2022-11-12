// makes the nav bar black(ish) if page is scrolled
function addScrollEvent() {
    window.scrollTo(0, 0);


    window.addEventListener("scroll", function () {
        navBarColor = document.getElementById("nav-color");
        navBarColorMobile = document.getElementById("nav-color-mobile");

        if (this.window.pageYOffset > 2) {
            navBarColor.style = "background-color: rgba(10, 10, 10, 0.88);";
            navBarColorMobile.style = "background-color: rgba(10, 10, 10, 0.88);";
        } else {
            navBarColor.style = "background-color: transparent;";
            navBarColorMobile.style = "background-color: transparent;";
        }
    });
}

// functionality for exppanding the nav bar on mobile after clicking hamburger button
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

function defaultNavExpansion() {
    navbarExpanded = document.getElementById("nav-expanded");


    if (window.matchMedia("(max-width: 980px)").matches) {
        if (navbarExpanded.classList.contains("hide")) {
            navbarExpanded.style = "display: none;";
        } else {
            navbarExpanded.classList.add("hide");
            navbarExpanded.style = "display: flex;";
        }
    }
}
function addMediaQuery() {
    defaultNavExpansion();
    window.addEventListener("resize", (event) => {
        defaultNavExpansion();
    });
}
addMediaQuery();
addScrollEvent();