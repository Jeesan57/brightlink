// the information for the caraousel page is stored here
let informationArray = [
  {
    title: "Cargo Services",
    secondaryCaption: "Shipping Services",
    src: "./images/cargo/cargo-service.jpg",
    thumbnailSrc: "./images/cargo/cargo-service.jpg",
    exploreLink: "#cargo",
  },
  {
    title: "Door To Door Cargo",
    secondaryCaption: "Door Delivery",
    src: "./images/cargo/door-to-door-cargo.jpg",
    thumbnailSrc: "./images/cargo/door-to-door-cargo.jpg",
    exploreLink: "#door-to-door",
  },
  {
    title: "Air Cargo",
    secondaryCaption: "Air Freight",
    src: "./images/cargo/air-freight.jpg",
    thumbnailSrc: "./images/cargo/air-freight.jpg",
    exploreLink: "#air-cargo",
  },
  {
    title: "Sea Cargo",
    secondaryCaption: "Sea Freight",
    src: "./images/cargo/shipping-service.jpg",
    thumbnailSrc: "./images/cargo/shipping-service.jpg",
    exploreLink: "#sea-cargo",
  },
  {
    title: "Land Cargo",
    secondaryCaption: "Land Transportation",
    src: "./images/cargo/land-transportation.jpg",
    thumbnailSrc: "./images/cargo/land-transportation.jpg",
    exploreLink: "#land-cargo",
  },
  {
    title: "Project Cargo",
    secondaryCaption: "Breakbulk Shipping",
    src: "./images/cargo/project-cargo.jpg",
    thumbnailSrc: "./images/cargo/project-cargo.jpg",
    exploreLink: "#project-cargo",
  },
  {
    title: "Vehicle Shipping",
    secondaryCaption: "Car Shipping",
    src: "./images/cargo/vehicle-shipping.jpg",
    thumbnailSrc: "./images/cargo/vehicle-shipping.jpg",
    exploreLink: "#vehicle",
  },
];

// varaibles that keep track of the animation state
let animationRunning = false;

// number of pages that should be shown in the caraousel slider
let numberOfPages = informationArray.length;


function showContent(pageNumber) {
  let contents = document.getElementsByClassName('content');

  for (let i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  let showContent = document.getElementsByClassName(`content-${pageNumber}`)[0];
  showContent.style.display = "flex";

}


function showService(pageNumber) {
  let services = document.getElementsByClassName('cargo-service');

  for (let i = 0; i < services.length; i++) {
    services[i].style.display = "none";
  }
  let showContent = document.getElementsByClassName(`service-${pageNumber}`)[0];
  showContent.style.display = "flex";

}

// animates the background images
function backgroundAnimation(element, time) {
  animationRunning = true;
  animationRunningMobile = true;
  var scaleDecrement = 1 / 700;
  var scale = 1.2;
  var instance = window.setInterval(function () {
    // animates on the scale property (1.2 to 1)
    element.style.transform = "scale(" + scale + ")";
    scale = scale - scaleDecrement;
    if (scale < 1) {
      animationRunning = false;
      animationRunningMobile = false;
      element.style.transform = "scale(" + 1 + ")";
      window.clearInterval(instance);
    }
  }, time);
}

// animates the height of a slider element
function heightAnimation(element, startingPercentage, endingPercentage, time) {
  animationRunning = true;
  animationRunningMobile = true;
  // magic value : that looks good
  var increment = (endingPercentage - startingPercentage) / 25;
  var height = startingPercentage;
  var instance = window.setInterval(function () {
    // animating on the height property (starting to ending percentage)
    element.style.height = `${height}%`;
    height = height + increment;
    if (height >= endingPercentage) {
      animationRunning = false;
      animationRunningMobile = false;
      element.style.height = `${endingPercentage}%`;
      window.clearInterval(instance);
    }
  }, time);
}

// animates the text
function textAnimation(element, time) {
  // animation done through css
  animationRunning = true;
  animationRunningMobile = true;
  element.classList.add("animate-text");
  setTimeout(function () {
    animationRunning = false;
    animationRunningMobile = false;
    element.classList.remove("animate-text");
  }, time * 1000);
}



// animates the slidng of caraousel
function slidingAnimation(current, target, time) {
  animationRunning = true;
  let activeContainers = [];
  let { result: places, direction } = countPlaces(current, target); // how many places to slide
  // var distance = places * 100;
  let container = document.getElementById("images-container");
  let imageContainers = document.querySelectorAll(".main .image-container");
  if (imageContainers) {
    for (let i = 0; i < imageContainers.length; i++) {
      // moves all elements
      container.removeChild(imageContainers[i]);
    }
  }
  // creates extra element on the right to move to
  for (let i = 0; i < numberOfPages * 2; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    let image = document.createElement("img");
    // current + i - 1 => gives the correct information for the element
    image.src =
      informationArray[(current + i - 1) % numberOfPages].thumbnailSrc;
    image.onclick = function () {
      // image click function
      setPage(((current + i - 1) % numberOfPages) + 1);
    };
    let caption = document.createElement("h1");
    caption.textContent =
      informationArray[(current + i - 1) % numberOfPages].title;
    caption.classList.add("caption");
    let secondaryCaption = document.createElement("p");
    secondaryCaption.textContent =
      informationArray[(current + i - 1) % numberOfPages].secondaryCaption;
    secondaryCaption.classList.add("secondary-caption");
    if (
      informationArray[(current + i - 1) % numberOfPages].thumbnailSrc ===
      informationArray[target - 1].thumbnailSrc
    ) {
      activeContainers = [...activeContainers, imageContainer];
    }
    imageContainer.appendChild(caption);
    imageContainer.appendChild(secondaryCaption);
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
  }
  var slided = 0;
  //magic number (should be a devisor of 110)
  let stepDistance = 2;

  // animation based on translateX (sliding)
  var instance = window.setInterval(function () {
    let images = document.querySelectorAll(".image-container img");
    let captions = document.querySelectorAll(".image-container .caption");
    let secondaryCaptions = document.querySelectorAll(
      ".image-container .secondary-caption"
    );
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = "translateX(-" + slided + "%)";
    }
    for (let i = 0; i < captions.length; i++) {
      captions[i].style.transform = "translateX(-" + slided + "%)";
    }
    for (let i = 0; i < secondaryCaptions.length; i++) {
      secondaryCaptions[i].style.transform = "translateX(-" + slided + "%)";
    }
    slided = slided + stepDistance;
    if (slided > places * 110) {
      animationRunning = false;
      for (let i = 0; i < activeContainers.length; i++) {
        // activeContainers[i].classList.add('active-image-container');
        heightAnimation(activeContainers[i], 60, 80, 1);
      }
      window.clearInterval(instance);
    }
  }, time);
}


// gives the number of iteration to slide on slide started (by button click or image click)
function countPlaces(current, target) {
  let result;
  let direction = 1;
  if (current === target) result = 0;
  else if (target > current) {
    result = target - current;
    direction = 1;
  } else {
    result = numberOfPages - (current - target);
    direction = -1;
  }
  return { result, direction };
}


// sets the page for web
function setPage(pageNumber) {
  showContent(pageNumber);
  showService(pageNumber);
  let currentInformation = informationArray[pageNumber - 1];
  let backgroundImage = document.getElementById("main-image"); // get
  if (pageNumber !== getCurrentPage()) {
    backgroundAnimation(backgroundImage, 2); // animate
  }
  backgroundImage.src = currentInformation.src; // change src
  let mainTitle = document.getElementsByClassName(`title-${pageNumber}`)[0]; // get
  // textAnimation(mainTitle, 1);


  let descriptionElement = document.getElementsByClassName(`description-${pageNumber}`)[0]; // get
  // textAnimation(descriptionElement, 1);

  slidingAnimation(getCurrentPage(), pageNumber, 2);
  for (let i = 1; i <= numberOfPages; i++) {
    let buttonID = "line-button" + i;
    let button = document.getElementById(buttonID);
    button.classList.remove("active");
    button.textContent = ".";
  }
  // active line-button id (?)
  let activeLineButtonID = "line-button" + pageNumber;
  //make the correct button active
  let activeButton = document.getElementById(activeLineButtonID);
  if (!activeButton.classList.contains("active"))
    activeButton.classList.add("active");
  activeButton.textContent = pageNumber;

  var more = document.getElementsByClassName(`more-${pageNumber}`)[0];
  more.style.display = "none";

  var exploreButton = document.getElementsByClassName(`explore-button-${pageNumber}`)[0];
  exploreButton.innerHTML = "Explore Services";

  animationRunning = false;
}


// returns the current page number
function getCurrentPage() {
  let currentPage = 0;
  for (let i = 1; i <= numberOfPages; i++) {
    let buttonID = "line-button" + i;
    let button = document.getElementById(buttonID);
    if (button.textContent !== ".") {
      currentPage = i;
    }
  }
  return currentPage;
}


// used by right or left "move-button"
function changeWithLeftRightButton(direction) {
  let currentPage = getCurrentPage();
  if (currentPage + direction <= 0) {
    setPage(numberOfPages);
  } else if (currentPage + direction > numberOfPages) {
    setPage(1);
  } else {
    setPage(currentPage + direction);
  }
}


function readMoreOrLess(pageNumber) {
  let more = document.getElementsByClassName(`more-${pageNumber}`)[0];

  let button = document.getElementsByClassName(`explore-button-${pageNumber}`)[0];
  if (more.style.display === "none") {
    more.style.display = "inline";
    button.textContent = "Read Less";
  }
  else {
    more.style.display = "none";
    button.textContent = "Explore Services";

  }
}




function start() {
  // find current anchor link (if any)
  let link = location.href;
  let splitted = link.split("#")[1];
  if (!splitted) {
    // initially set the current page to the first page for mobile
    // window.scrollTo(0, 0);
    setPage(1);
  }
  else {
    let anchor = splitted.split("/")[0];
    let page = 1;

    for (let i = 0; i < informationArray.length; i++) {
      if (informationArray[i].exploreLink === ("#" + anchor)) {
        page = i + 1;
        break;
      }
    }
    setPage(page);
  }

}

start();
