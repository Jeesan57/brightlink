/// information of the banner (slider)
const informationArray = [
  {
    image: "./images/movers/moving-and-storage.jpg",
    primary1: "Moving & Storage",
    primary2: "BRIGHTLINK CARGO",
    secondaryLink: "About Us >",
    secondaryLinkHref: "about",
    description: "BrightLink Cargo and Movers is a UAE based shipping company specializes in cargo, moving and storage services. With strong presence in UAE, We have grown into one of the most promising logistics service providers in the region and the world at large.",
  },
  {
    image: "./images/cargo/door-to-door-cargo.jpg",
    primary1: "Cargo",
    primary2: "Services",
    secondaryLink: "Cargo Services >",
    secondaryLinkHref: "cargo-service",
    description: "BrightLink Cargo with its specialized transport vehicles, advanced tracking system and global coverage allows us to offer a whole range of Freight Forwarding and Cargo solutions.",
  },
  {
    image: "./images/movers/movers-and-packers.jpg",
    primary1: "Domestic",
    primary2: "Relocation",
    secondaryLink: "Moving Services >",
    secondaryLinkHref: "movers-and-packers",
    description: "Want a stress-free Domestic Relocation Services or looking for Commercial Moving service?. BrightLink Movers and Packers to assist you with the all your local moving requirements.",
  },
  {
    image: "./images/movers/international-movers.jpg",
    primary1: "International",
    primary2: "Moving",
    secondaryLink: "International Movers >",
    secondaryLinkHref: "movers-and-packers#international",
    description: "BrightLink International Movers is one of the Best Moving Company in UAE offers professional International Relocations and Household Goods Shipping Services.",
  },
  {
    image: "./images/storage/storage-service.jpg",
    primary1: "Storage",
    primary2: "Services",
    secondaryLink: "Storage Services >",
    secondaryLinkHref: "storage-service",
    description: "BrightLink Storage Solutions are amongst one of the best that exists in the industry. We offer long-term, short-term and Self-Storage Services.",
  },
];



let changeTime = 11; // animation cycle
let currentPage = 0;

// elements
let slider = null;
let primary1 = null;
let primary2 = null;
let secondaryLink = null;
let description = null;
let sliderImage = null;
let navbarExpanded = null;
let slider0 = null;
let slider1 = null;
let slider2 = null;
let slider3 = null;
let slider4 = null;
let navBarColor = null;
let navBarColorMobile = null;
let currentPageElement = null;


// key frame for background and text animation
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
  20%{
    opacity: 1;
    transform: translateY(0px);
  }
  80%{
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
  #primary1 {
    animation: textup ${changeTime}s linear infinite;
  }
  #primary2 {
    animation: textup ${changeTime}s linear infinite;
  }
  #secondary-link {
    animation: textup ${changeTime}s linear infinite;
  }
  #secondary-description {
    animation: textup ${changeTime}s linear infinite;
  }
  
`;
  document.head.appendChild(keyFrames);
}




// sets the page
function setPage(pageNumber) {
  currentPage = pageNumber;
  let information = informationArray[pageNumber];
  sliderImage.src = information.image;
  primary1.textContent = information.primary1;
  primary2.textContent = information.primary2;
  secondaryLink.textContent = information.secondaryLink;
  secondaryLink.onclick = function () {
    window.location = information.secondaryLinkHref;
  }
  description.textContent = information.description;
}

// goes to prev page
function goToPrevPage()
{
  let totalPages = informationArray.length;
  let target = 0;
  if(currentPage === 0) target = totalPages - 1;
  else target = currentPage - 1;
  setPage(target);
  setSliders(target);
}

// goes to next page
function goToNextPage()
{
  let totalPages = informationArray.length;
  let target = 0;
  if(currentPage >= totalPages - 1) target = 0;
  else target = currentPage + 1;
  setPage(target);
  setSliders(target);
}

// sets the sliders
function setSliders(currentPage) {
  if (currentPage === 0) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: #dbdbdb;";
    slider2.style = "background-color: #dbdbdb;";
    slider3.style = "background-color: #dbdbdb;";
    slider4.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "01";
  }
  if (currentPage === 1) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: #dbdbdb;";
    slider3.style = "background-color: #dbdbdb;";
    slider4.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "02";
  }
  if (currentPage === 2) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: white;";
    slider3.style = "background-color: #dbdbdb;";
    slider4.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "03";
  }
  if (currentPage === 3) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: white;";
    slider3.style = "background-color: white;";
    slider4.style = "background-color: #dbdbdb;";
    currentPageElement.textContent = "04";
  }
  if (currentPage === 4) {
    slider0.style = "background-color: white;";
    slider1.style = "background-color: white;";
    slider2.style = "background-color: white;";
    slider3.style = "background-color: white;";
    slider4.style = "background-color: white;";
    currentPageElement.textContent = "05";
  }
}

// start interval for changing page every ${changeTime} second
function startInterval() {
  window.setInterval(function () {
    currentPage = (currentPage + 1) % informationArray.length;
    setPage(currentPage);
    setSliders(currentPage);
  }, changeTime * 1000);
}

// intializing
function main() {
  slider = document.getElementById("slider");
  primary1 = document.getElementById('primary1');
  primary2 = document.getElementById('primary2');
  secondaryLink = document.getElementById('secondary-link');
  description = document.getElementById('secondary-description');
  // takes 0 to 3
  let information = informationArray[0];
  primary1.textContent = information.primary1;
  primary2.textContent = information.primary2;
  secondaryLink.textContent = information.secondaryLink;
  secondaryLink.onclick = function () {
    window.location = information.secondaryLinkHref;
  }
  description.textContent = information.description;
  sliderImage = document.getElementById("slider-image");
  slider0 = document.getElementById("slider0");
  slider1 = document.getElementById("slider1");
  slider2 = document.getElementById("slider2");
  slider3 = document.getElementById("slider3");
  slider4 = document.getElementById("slider4");
  currentPageElement = document.getElementById("current-page-number");
  slider0.style = "background-color: white;";
  slider1.style = "background-color: #dbdbdb;";
  slider2.style = "background-color: #dbdbdb;";
  slider3.style = "background-color: #dbdbdb;";
  slider4.style = "background-color: #dbdbdb;";
  addKeyFrames();
  startInterval();
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

main();
