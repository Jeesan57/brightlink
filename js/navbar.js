// makes the nav bar black(ish) if page is scrolled
function addScrollEvent() {
    window.scrollTo(0, 0);
    navBarColor = document.getElementById("nav-color");
    navBarColorMobile = document.getElementById("nav-color-mobile");
    window.addEventListener("scroll", function () {
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
    // if mobile screen
    if (window.matchMedia("max-width: 980px")) {
        // if hidden
        if (navbarExpanded.classList.contains("hide")) {
            navbarExpanded.style = "display: none;";
        } else {
            navbarExpanded.classList.add("hide");
            navbarExpanded.style = "display: flex;";
        }
    }
    // display always none in pc
    else {
        navbarExpanded.style = "display: none;";
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