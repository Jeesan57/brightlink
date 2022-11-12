// the information for the caraousel page is stored here
let informationArray = [
    {
      title: "Storage Services",
      secondaryCaption: "Warehousing Services",
      description: 
        "Looking for professional and affordable Storage Company in UAE?. We are one of the best Storage and Warehousing services provider in UAE. We provide Long-term and Short-term Storage service for Household goods, Furnitures, Personal Effects, Industrial, Business and Commercial Goods.",
      textSectionDescription: 
        "We have a fully automated Storage and Warehousing facility making us the most advanced Storage and Warehousing Service provider in UAE. Our wide range of storage options includes Self Storage, Loose Storage, Wooden or Steel Containerized Storage, Palletized Storage, Furniture Storage, Personal Effects Storage, Perishable and Non-Perishable Goods Storage, Dangerous Goods storage, and a fully functional document archiving facility. We provide both long-term and short-term storage facilities for all purposes. Our skilled management team can cater to all your warehousing needs like a pro. We also provide Storage Packing, pick-up and delivery services for all your storage goods. With 24 hours surveillance, high-security vaults for precious items and many other security features it’s safe to say that your goods are protected from any possible safety threat. Our Storage, warehousing and distribution are built to provide full visibility and traceability of every single one of your items. The customers have option to choose the kinds and types of storage they want for their goods; they can choose self-storage or open storage facility based on their goods. We do provide room temperature and air-conditioned storage service. Our warehouse is located at an optimum location such that it is easily accessible and is convenient for individuals and business purposes as well. Our aim is to provide cost-effective storage space and professional service, hence we have budget-friendly storage options to cater any kinds of storage demands. BrightLink provide best warehousing and storage services in UAE. Our Storage Service includes Open Storage and Racked Storage facilities. We offer customizable storage and warehousing services that best meet your requirements for short-term and long-term storage and warehousing. The requirements for storage may vary based on the nature of goods, hence we have wide range of storage option, including room temperature storage, air conditioned and climate control storage. We offer Storage and Warehousing Services in and from Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Umm Al Quwain (UAQ), Ras Al Khaimah (RAK) and Fujairah.",
      exploreLink: '#storage',
      src: "./images/storage/storage-service.jpg",
      thumbnailSrc: "./images/storage/storage-service.jpg",
    },
    {
      title: "Self Storage Facilities",
      secondaryCaption: "Self Storage Unit",
      description: 
        "Our Self-Storage in UAE is convenient and reliable, customer can access any time they want and can have full control of their goods. We provide clean, secure, accessible and affordable storage facilities for all your needs.",
      textSectionDescription: 
        "Our Self Storage service include the option to choose the size and duration as they want, it is flexible in terms of time and space requirements, you can store a box of personal effects or a complete household goods for few days or for months, you have best flexible short and long term storage option with us. Our storage facilities come in different sizes so that you pay only for the space you need. As a virtue of our secure infrastructure and 24 hours CCTV surveillance, we have an unbeatable track record making us the safest Self-storage facility in UAE and the entire UAE. All our storage units are easily accessible and are suitable for all weather conditions. We also provide packing, pick-up and delivery services, our expert packers will come to your place and pack all the goods in a manner that helps in maximizing the capacity of your storage unit. We can also drop your items at your desired location upon requirement. With unsurpassed safety records and impeccable services, BrightLink Self-Storage units are undeniably the best self-storage facility in UAE. We offer Self-Storage Services in and from Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Umm Al Quwain (UAQ), Ras Al Khaimah (RAK) and Fujairah.",
      exploreLink: '#self',
      src: "./images/storage/self-storage-service.jpg",
      thumbnailSrc: "./images/storage/self-storage-service.jpg",
    },
    {
      title: "Moving and Storage",
      secondaryCaption: "Moving and Storage",
      description: 
        "BrightLink is a reliable Moving and Storage service provider in UAE. We provide professional moving service along with storage facility in UAE for long and short-term. Our customer can decide and choose what kind storage they want for their goods.",
      textSectionDescription: 
        "The requirement for storage service at the time of local house moving or International Relocation is always unpredicted or unwelcomed. Most of the time customer avail our service when the furniture doesn’t fit to new house or office or at the time of vacation or vacating the premise and they may want just to pack and store the household goods and furniture for a while to decide where and when to move. The advantage of our moving and storage service in UAE is we provide wide range of storage service including open storage, racked storage and self-storage along with moving service. As we shift furniture’s both locally and internationally, our customer can have a stress free moving and storage experience and they don’t have to rely on any other Shipping Company or Moving Company to move their goods either domestically or globally. Our moving and storage service is specially designed to meet all your such situation, and it also cover commercial moving and storage requirements. We have well experienced packing and moving staffs in UAE who can do any king of office furniture moving and storing at reasonable price. We offer Moving and Storage Services in and from Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Umm Al Quwain (UAQ), Ras Al Khaimah (RAK) and Fujairah.",
      exploreLink: '#moving',
      src: "./images/storage/warehousing-service.jpg",
      thumbnailSrc: "./images/storage/warehousing-service.jpg",
    },
    {
      title: "Record Management",
      secondaryCaption: "Document Archiving",
      description: 
        "BrightLink’s Records Management Services in UAE professionally archive your company’s important documents, and provide exclusive secured access to you 24/7. Every company stores information and data in different forms like hard copies, scanned images, soft copies, e-documents, and legal documents and they often get cluttered.",
      textSectionDescription: 
        "Here at BrightLink Record Management Service in UAE, we will manage, arrange and develop a systematic system so that each document is available to the right person at the right time. Having necessary data upon requirements can help to make informed business decisions and implement precise business strategies as well. We realize the responsibility of taking care of your documents and thus we double-check everything so that there is no room for error. Along with Documents Storage services in UAE, we also provide secure and confidential document shredding upon request. Handling and archiving documents and information require great experience, as each set of documents should be stored in a manner that it can be accessible any time they want, all thanks to our document storage department in UAE, they know how to efficiently keep records of all confidential documents and information. Apart from documents storage we also offer packing, pick-up and deliveries. Our staffs know how to pack, mark, transport and store your documents professionally. The document storage and archiving team at BrightLink UAE knows how to handle and safely store your important documents without misplacing and you have option to access any documents you stored at any time as you want. As our storage is fully equipped with advanced security and 24/7 surveillance, the customer can relax as their goods are in safe hand. We offer Record Management Services in and from Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Umm Al Quwain (UAQ), Ras Al Khaimah (RAK) and Fujairah.",
      exploreLink: '#record',
      src: "./images/storage/record-management.jpg",
      thumbnailSrc: "./images/storage/record-management.jpg",
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