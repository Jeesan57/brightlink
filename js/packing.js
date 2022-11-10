// the information for the caraousel page is stored here
let informationArray = [
    {
      title: "Packing Services",
      secondaryCaption: "Packing Materials",
      description: 
        "Looking for Professional Packing and Packaging Services in UAE?. BrightLink Movers and Packers, as the name suggests we pack, deliver, store and transport any goods on a daily basis. We provide complete packing and packaging solutions any items regardless of their quantity and size.",
      textSectionDescription: 
        "Over the years we have packed thousands of goods and owing to that we have solutions for all possible problems that one can encounter during packing. Our Packing Service in UAE provide complete packing solution for any kinds of goods, we pack both commercial and household goods as per clients requirements and use different Packing Materials for different types of goods. We do packing with plastic/polythene sheets, foam sheets, boxes, bags, stretch films, corrugated roll, bubble wrap, cling wrap and much more based on the goods and nature. We have successfully packed everything ranging from big unstable and unsymmetrical goods to small fragile items. We provide custom packing services in UAE for all your goods. Along with packing we also sell packing materials. Our customers can buy various packing materials including moving boxes, cartons, hanger boxes, corrugated roll and bubble wrap etc. based on their requirements, and we can deliver the packing materials to anywhere in UAE at their doorstep. If anyone need custom packing services, we can even provide that by mobilizing our packing staff with adequate packing materials at customers location and will make sure everything is packed professionally. Leave your packing jobs and worries to us, we will make sure everything is protected well, whether it is export packing, storage packing or for commercial purpose, we know how to pack well. We offer Packing and Packaging Services in and from Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Umm Al Quwain (UAQ), Ras Al Khaimah (RAK) and Fujairah.",
      exploreLink: '#packing',
      src: "./images/packing/packing-service.jpg",
      thumbnailSrc: "./images/packing/packing-service.jpg",
    },
    {
      title: "Packaging Services",
      secondaryCaption: "Packaging Materials",
      description: 
        "",
      textSectionDescription: 
        "",
      exploreLink: '#packaging',
      src: "./images/packing/packaging-service.jpg",
      thumbnailSrc: "./images/packing/packaging-service.jpg",
    },
    {
      title: "Crating Services",
      secondaryCaption: "Crating Facilities",
      description: 
        "We Provide affordable shipping crates and pallets in UAE. We provide Logistics Services, hence Crating and Palletizing are a part of our daily routine.",
      textSectionDescription: 
        "We also manufacture Crates to hold delicate goods that hold strong even in the rare case of rough handling. The crates are made of required dimensions so as to perfectly contain the goods and ensure their safety. Our Crating Service in UAE also provide custom made crates upon request and it includes wooden boxes, corrugated boxes, based on the nature of product. The materials and design of these crates depend on various factors such as the nature of goods to be stored, weight of the goods and the time for which they will be used. After conducting a survey of all necessary factors, we proceed towards manufacturing and build a strong and sturdy and durable crate. We have all kinds and types of crating and services in UAE. We offer Crating Services in and from Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Umm Al Quwain (UAQ), Ras Al Khaimah (RAK) and Fujairah.",
      exploreLink: '#crating',
      src: "./images/packing/crating-service.jpg",
      thumbnailSrc: "./images/packing/crating-service.jpg",
    },
    {
      title: "Palletizing Services",
      secondaryCaption: "Palletizing Facilities",
      description: 
        "Pallets are integral part of logistics and shipping and it makes handling and transportation easy.",
      textSectionDescription: 
        "Palletized products even reduce the risk of damage. We create custom durable Pallets depending on the dimensions and weight of the goods to be placed and shipped. Our heavy-duty pallets are suitable for storage and transportation, and also facilitate easy handling. We make and sell and kinds of pallets, and also provide palletization services in UAE. We do have wooden, plastic and steel pallets and we can pride this in any size.",
      exploreLink: '#palletizing',
      src: "./images/packing/palletizing-service.jpg",
      thumbnailSrc: "./images/packing/palletizing-service.jpg",
    },
];

// varaibles that keep track of the animation state
let animationRunning = false;
let animationRunningMobile = false;

// number of pages that should be shown in the caraousel slider
let numberOfPages = informationArray.length;

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

// similar to larger screens (just on different elements)
function slidingAnimationMobile(current, target, time) {
  animationRunningMobile = true;
  let activeContainers = [];
  let { result: places, direction } = countPlaces(current, target); // how many places to slide
  // var distance = places * 100;
  let container = document.getElementById("mobile-images-container");
  let imageContainers = document.querySelectorAll(
    ".mobile-images-container .image-container"
  );
  if (imageContainers) {
    for (let i = 0; i < imageContainers.length; i++) {
      container.removeChild(imageContainers[i]);
    }
  }
  for (let i = 0; i < numberOfPages * 2; i++) {
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.src =
      informationArray[(current + i - 1) % numberOfPages].thumbnailSrc;
    image.onclick = function () {
      setPageMobile(((current + i - 1) % numberOfPages) + 1);
    };
    if (
      informationArray[(current + i - 1) % numberOfPages].thumbnailSrc ===
      informationArray[target - 1].thumbnailSrc
    ) {
      activeContainers = [...activeContainers, image];
    }
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
  }
  // let distance = 12.5 * places;
  var slided = 0;
  let stepDistance = 2;
  // if(places > 2) stepDistance = 2;
  // if(places > 3) stepDistance = 5;
  var instance = window.setInterval(function () {
    let images = document.querySelectorAll(".image-container img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = "translateX(-" + slided + "%)";
    }
    slided = slided + stepDistance;
    if (slided > places * 110) {
      animationRunningMobile = false;
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

function setExploreID(element, exploreLink) {
  // for(let i = 0 ; i < informationArray.length; i++)
  // {
  //     let id = informationArray.exploreLink.split('#')[0];
  //     element.removeAttribute(`${id}`);
  // }

  element.removeAttribute("id");
  let id = ("getID" + exploreLink).split("#")[1];
  element.setAttribute("id", id);
}

// sets the page for web
function setPage(pageNumber) {
  if (animationRunning) return;
  let currentInformation = informationArray[pageNumber - 1];
  let backgroundImage = document.getElementById("main-image"); // get
  if (pageNumber !== getCurrentPage()) {
    backgroundAnimation(backgroundImage, 2); // animate
  }
  backgroundImage.src = currentInformation.src; // change src
  let mainTitle = document.getElementById("title"); // get
  mainTitle.textContent = currentInformation.title; // change the title
  textAnimation(mainTitle, 1);

  // set explore link
  let service = document.getElementsByClassName("cargo-service")[0];
  setExploreID(service, currentInformation.exploreLink);

  let gotoButton = document.getElementById("goto-button");
  gotoButton.textContent = currentInformation.title;

  let cargoTitle = document.getElementById("cargo-title");
  cargoTitle.textContent = currentInformation.title; // change the title

  let cargoContent = document.getElementById("cargo-content");
  cargoContent.textContent = getLessText(
    currentInformation.textSectionDescription
  ); // change the title

  let descriptionElement = document.getElementById("description"); // get
  descriptionElement.textContent = currentInformation.description; // change the title
  textAnimation(description, 1);
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

  var dots = document.getElementById("cargo-dots");
  dots.style.display = "inline";

  var exploreButton = document.getElementById("explore-button");
  exploreButton.innerHTML = "Explore Services";

  animationRunning = false;
}

// sets the page for mobile
function setPageMobile(pageNumber) {
  let currentInformation = informationArray[pageNumber - 1];
  let backgroundImage = document.getElementById("mobile-main-image"); // get
  if (pageNumber !== getCurrentPage()) backgroundAnimation(backgroundImage, 2); // animate
  backgroundImage.src = currentInformation.src; // change src
  let mainTitle = document.getElementById("mobile-title"); // get
  mainTitle.textContent = currentInformation.title; // change the title
  textAnimation(mainTitle, 1);

  // set explore link
  let service = document.getElementsByClassName("cargo-service")[0];
  setExploreID(service, currentInformation.exploreLink);

  let gotoButton = document.getElementById("goto-button-mobile");
  gotoButton.textContent = currentInformation.title;

  let cargoTitle = document.getElementById("cargo-title");
  cargoTitle.textContent = currentInformation.title; // change the title

  let cargoContent = document.getElementById("cargo-content");
  cargoContent.textContent = getLessText(
    currentInformation.textSectionDescription
  ); // change the title

  let descriptionElement = document.getElementById("mobile-description"); // get
  descriptionElement.textContent = currentInformation.description; // change the title
  textAnimation(descriptionElement, 1);
  // make for mobile
  slidingAnimationMobile(getCurrentPageMobile(), pageNumber, 2);
  for (let i = 1; i <= numberOfPages; i++) {
    let buttonID = "mobile-line-button" + i;
    let button = document.getElementById(buttonID);
    button.classList.remove("active");
    button.textContent = ".";
  }
  // active line-button id (?)
  let activeLineButtonID = "mobile-line-button" + pageNumber;
  //make the correct button active
  let activeButton = document.getElementById(activeLineButtonID);
  if (!activeButton.classList.contains("active"))
    activeButton.classList.add("active");
  activeButton.textContent = pageNumber;

  var dots = document.getElementById("cargo-dots");
  dots.style.display = "inline";

  var exploreButton = document.getElementById("explore-button");
  exploreButton.innerHTML = "Explore Services";

  animationRunningMobile = false;
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
// returns the current page number for mobile
function getCurrentPageMobile() {
  let currentPage = 0;
  for (let i = 1; i <= numberOfPages; i++) {
    let buttonID = "mobile-line-button" + i;
    let button = document.getElementById(buttonID);
    if (button.textContent !== ".") {
      currentPage = i;
    }
  }
  return currentPage;
}

// 1 or -1

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
// 1 or -1
// used by right or left "move-button" for mobile
function changeWithLeftRightButtonMobile(direction) {
  let currentPage = getCurrentPageMobile();
  if (currentPage + direction <= 0) {
    setPageMobile(numberOfPages);
  } else if (currentPage + direction > numberOfPages) {
    setPageMobile(1);
  } else {
    setPageMobile(currentPage + direction);
  }
}
// functionality of explore button
function goExplore() {
  let currentPage = getCurrentPage();
  let currentInformation = informationArray[currentPage - 1];
  window.location = currentInformation.exploreLink;
}
// functionality of explore button mobile
function goExploreMobile() {
  let currentPage = getCurrentPageMobile();
  let currentInformation = informationArray[currentPage - 1];
  window.location = currentInformation.exploreLink;
}

function getLessText(textSectionDescription) {
  let LessText = "";
  let maxWords = 7;
  let currentWords = 0;
  for (let i = 0; i < textSectionDescription.length; i++) {
    if (currentWords >= maxWords) break;
    if (textSectionDescription[i] === ".") currentWords++;
    LessText += textSectionDescription[i];
  }
  return LessText;
}

function readMoreOrLess() {
  var content = document.getElementById("cargo-content");
  var dots = document.getElementById("cargo-dots");
  var exploreButton = document.getElementById("explore-button");

  // get the correct content
  let page = 0;
  for (let i = 0; i < informationArray.length; i++) {
    if (
      informationArray[i].textSectionDescription.includes(content.textContent)
    ) {
      page = i;
      break;
    }
  }

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    exploreButton.innerHTML = "Explore Services";
    content.textContent = getLessText(
      informationArray[page].textSectionDescription
    );
  } else {
    dots.style.display = "none";
    exploreButton.innerHTML = "Read Less";
    content.textContent = informationArray[page].textSectionDescription;
  }
}

function jumpTo(anchor_id) {
  var url = location.href; //Saving URL without hash.
  location.href = anchor_id; //Navigate to the target element.
  history.replaceState(null, null, url); //method modifies the current history entry.
}

function start() {
  // find current anchor link (if any)
  let link = location.href;
  let splitted = link.split("#")[1];
  if (!splitted) {
    // initially set the current page to the first page for mobile
    window.scrollTo(0, 0);
    setPage(1);
    setPageMobile(1);
  }
  else
  {
      let anchor = splitted.split("/")[0];
      let page = 1;

      for(let i = 0; i < informationArray.length; i++)
      {
        if(informationArray[i].exploreLink === ("#"+anchor))
        {
            page = i + 1;
            break;
        }
      }
      setPage(page);
      setPageMobile(page);
      jumpTo('#' + anchor);
  }

}

start();