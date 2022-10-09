let slider = null;
let sliderSecondaryCaption = null;
let sliderPrimaryCaption = null;
let sliderImage = null;
let navbarExpanded = null;
let changeTime = 11;
let currentPage = 0;

let slider0 = null;
let slider1 = null;
let slider2 = null;
let slider3 = null;

let navBarColor = null;
let navBarColorMobile = null;

let currentPageElement = null;

const informationArray = [
  {
    image: "../images/banner/international-movers.jpg",
    secondaryCaption: "Moving / CARGO / STORAGE",
    primaryCaption: "BRIGHTLINK CARGO MOVERS",
  },
  {
    image: "../images/banner/movers-and-packers.jpg",
    secondaryCaption: "Domestic Relocation / International Movers",
    primaryCaption: "RELOCATION SERVICES",
  },
  {
    image: "../images/banner/door-to-door-cargo.jpg",
    secondaryCaption: "Door to Door Cargo / Shipping Service",
    primaryCaption: "CARGO SERVICES",
  },
  {
    image: "../images/banner/storage-service.jpg",
    secondaryCaption: "storage Service / Warehousing Service",
    primaryCaption: "STORAGE SERVICES",
  },
];

function addKeyFrames() {
  const keyFrames = document.createElement("style");
  keyFrames.innerHTML = `
  @keyframes slideShow {
    0% {
        opacity: 0.5;
        transform: scale(1);
        -ms-transform: scale(1);
        background-position: 0px 0px;
    }


    5% {
      opacity: 0.95;
    }


    100% {

        opacity: 0.95;
        transform: scale(1.2);
        -ms-transform: scale(1.2);
        background-position: -100px 0px;

    }
}

@keyframes textup{
  0%{
    opacity: 0;
    transform: translateY(50px);
  }
  2%{
    opacity: 1;
    transform: translateY(0px);
  }
  98%{
    opacity: 1;
    transform: translateY(0px);
  }
  100%{
    opacity: 0;
    transform: translateY(-50px);
  }
}


  #slider-image {
    animation: slideShow ${changeTime}s linear infinite;

  }

  #slider-secondary-caption {
    animation: textup ${changeTime}s linear infinite;


  }
  #slider-primary-caption {
    animation: textup ${changeTime}s linear infinite;


  }

  
`;

  document.head.appendChild(keyFrames);
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

function addScrollEvent() {
  navBarColor = document.getElementById("nav-color");
  navBarColorMobile = document.getElementById("nav-color-mobile");

  window.addEventListener("scroll", function () {
    console.log(window.pageYOffset);
    if (this.window.pageYOffset !== 0) {
      console.log(navBarColor);
      navBarColor.style = "background-color: black;";
      navBarColorMobile.style = "background-color: black;";
    } else {
      navBarColor.style = "background-color: transparent;";
      navBarColorMobile.style = "background-color: transparent;";
    }
  });
}

function addMediaQuery() {
  defaultNavExpansion();
  window.addEventListener("resize", (event) => {
    defaultNavExpansion();
  });
}

function setPage(pageNumber) {
  // takes 0 to 3
  let information = informationArray[pageNumber];
  sliderImage.src = information.image;
  sliderSecondaryCaption.textContent = information.secondaryCaption;
  sliderPrimaryCaption.textContent = information.primaryCaption;
}

function setSliders(currentPage) {
  if (currentPage === 0) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: #dbdbdb;";
    slider2.style = "background-color: #dbdbdb;";
    slider3.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "01";
  }
  if (currentPage === 1) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: #dbdbdb;";
    slider3.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "02";
  }
  if (currentPage === 2) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: white;";
    slider3.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "03";
  }
  if (currentPage === 3) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: white;";
    slider3.style = "background-color: white;";
    currentPageElement.textContent = "04";
  }
}
function startInterval() {
  window.setInterval(function () {
    currentPage = (currentPage + 1) % informationArray.length;
    setPage(currentPage);
    setSliders(currentPage);
  }, changeTime * 1000);
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
function main() {
  console.log("Hello world");
  slider = document.getElementById("slider");
  sliderSecondaryCaption = document.getElementById("slider-secondary-caption");
  sliderPrimaryCaption = document.getElementById("slider-primary-caption");
  sliderImage = document.getElementById("slider-image");

  slider0 = document.getElementById("slider0");
  slider1 = document.getElementById("slider1");
  slider2 = document.getElementById("slider2");
  slider3 = document.getElementById("slider3");

  currentPageElement = document.getElementById("current-page-number");

  slider0.style = "background-color: white;";
  slider1.style = "background-color: #dbdbdb;";
  slider2.style = "background-color: #dbdbdb;";
  slider3.style = "background-color: #dbdbdb;";

  addKeyFrames();
  startInterval();
  addMediaQuery();
  addScrollEvent();
}

main();
