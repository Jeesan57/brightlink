// the information for the caraousel page is stored here
let informationArray = [
    {
        title: "Cargo Services",
        secondaryCaption: "Shipping Services",
        description: 
        "Looking for best and affordable Cargo Company in UAE?. BrightLink Cargo with its specialized vehicles, online and offline tracking system, and worldwide coverage allows us to offer a whole range of professional cargo solutions.",
        exploreLink: '/cargo-service',
        src: "./images/cargo/cargo-service.jpg",
        thumbnailSrc: "./images/cargo/cargo-service.jpg",
    },
    {
        title: "Moving Services",
        secondaryCaption: "Relocation Services",
        description: 
        "Planning to Move your and looking for a professional and affordable Moving Company in UAE? then you are at right place. The Relocation processes whether for local or international environments have always been stressful and arduous for many, and we are here to make it stress-free.",
        exploreLink: '/movers-and-packers',
        src: "./images/movers/movers-and-packers.jpg",
        thumbnailSrc: "./images/movers/movers-and-packers.jpg",
    },
    {
        title: "Storage Services",
        secondaryCaption: "Warehousing Services",
        description: 
        "Looking for best and affordable international Cargo Company in UAE?. BrightLink Cargo with its specialized transport vehicles, online and offline tracking system, and nationwide and international coverage allows us to offer a whole range of professional cargo transportation solutions.",
        exploreLink: '/storage-service',
        src: "./images/storage/storage-service.jpg",
        thumbnailSrc: "./images/storage/storage-service.jpg",
    },
    {
        title: "Furniture Installation",
        secondaryCaption: "Furniture Assembly",
        description: 
        "BrightLink Furniture Installation is undoubtedly the most reliable name for Furniture Installation service in UAE. We credit this achievement to our skilled professionals who have mastered the skills necessary to install and assemble couple of furniture within a few hours and also can undertake large quantity Furniture Assembly with given time.",
        exploreLink: '/furniture-installation',
        src: "./images/installation/furniture-installation.jpg",
        thumbnailSrc: "./images/installation/furniture-installation.jpg",
    },
    {
        title: "Packing Services",
        secondaryCaption: "Packing Materials",
        description: 
        "Looking for best and affordable international Cargo Company in UAE?. BrightLink Cargo with its specialized transport vehicles, online and offline tracking system, and nationwide and international coverage allows us to offer a whole range of professional cargo transportation solutions.",
        exploreLink: '/packing-service',
        src: "./images/packing/packing-service.jpg",
        thumbnailSrc: "./images/packing/packing-service.jpg",
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
        element.style.transform = 'scale(' + scale + ')';
        scale = scale - scaleDecrement;
        if (scale < 1) {
            animationRunning = false;
            animationRunningMobile = false;
            element.style.transform = 'scale(' + 1 + ')';
            window.clearInterval(instance);
        }
    }, time)
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
    }, time)
}

// animates the text
function textAnimation(element, time) {
    // animation done through css
    animationRunning = true;
    animationRunningMobile = true;
    element.classList.add('animate-text');
    setTimeout(function () {
        animationRunning = false;
        animationRunningMobile = false;
        element.classList.remove('animate-text');
    }, time * 1000);
}

// animates the slidng of caraousel
function slidingAnimation(current, target, time) {
    animationRunning = true;
    let activeContainers = [];
    let { result: places, direction } = countPlaces(current, target); // how many places to slide
    // var distance = places * 100;
    let container = document.getElementById('images-container');
    let imageContainers = document.querySelectorAll('.main .image-container');
    if (imageContainers) {
        for (let i = 0; i < imageContainers.length; i++) {
            // moves all elements
            container.removeChild(imageContainers[i]);
        }
    }
    // creates extra element on the right to move to
    for (let i = 0; i < numberOfPages * 2; i++) {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add('image-container');
        let image = document.createElement('img');
        // current + i - 1 => gives the correct information for the element
        image.src = informationArray[(current + i - 1) % numberOfPages].thumbnailSrc;
        image.onclick = function () {
            // image click function
            setPage(((current + i - 1) % numberOfPages) + 1);
        };
        let caption = document.createElement('h1');
        caption.textContent = informationArray[(current + i - 1) % numberOfPages].title;
        caption.classList.add('caption');
        let secondaryCaption = document.createElement('p');
        secondaryCaption.textContent = informationArray[(current + i - 1) % numberOfPages].secondaryCaption;
        secondaryCaption.classList.add('secondary-caption');
        if (informationArray[(current + i - 1) % numberOfPages].thumbnailSrc === informationArray[target - 1].thumbnailSrc) {
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
        let images = document.querySelectorAll('.image-container img');
        let captions = document.querySelectorAll('.image-container .caption');
        let secondaryCaptions = document.querySelectorAll('.image-container .secondary-caption');
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = 'translateX(-' + slided + '%)';
        }
        for (let i = 0; i < captions.length; i++) {
            captions[i].style.transform = 'translateX(-' + slided + '%)';
        }
        for (let i = 0; i < secondaryCaptions.length; i++) {
            secondaryCaptions[i].style.transform = 'translateX(-' + slided + '%)';
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
    }, time)
}

// similar to larger screens (just on different elements)
function slidingAnimationMobile(current, target, time) {
    animationRunningMobile = true;
    let activeContainers = [];
    let { result: places, direction } = countPlaces(current, target); // how many places to slide
    // var distance = places * 100;
    let container = document.getElementById('mobile-images-container');
    let imageContainers = document.querySelectorAll('.mobile-images-container .image-container');
    if (imageContainers) {
        for (let i = 0; i < imageContainers.length; i++) {
            container.removeChild(imageContainers[i]);
        }
    }
    for (let i = 0; i < numberOfPages * 2; i++) {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add('image-container');
        let image = document.createElement('img');
        image.src = informationArray[(current + i - 1) % numberOfPages].thumbnailSrc;
        image.onclick = function () {
            setPageMobile(((current + i - 1) % numberOfPages) + 1);
        };
        if (informationArray[(current + i - 1) % numberOfPages].thumbnailSrc === informationArray[target - 1].thumbnailSrc) {
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
        let images = document.querySelectorAll('.image-container img');
        for (let i = 0; i < images.length; i++) {
            images[i].style.transform = 'translateX(-' + slided + '%)';
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
    }, time)
}

// gives the number of iteration to slide on slide started (by button click or image click)
function countPlaces(current, target) {
    let result;
    let direction = 1;
    if (current === target) result = 0;
    else if (target > current) {
        result = (target - current);
        direction = 1;
    }
    else {
        result = numberOfPages - (current - target);
        direction = -1;
    }
    return { result, direction };
}

// sets the page for web
function setPage(pageNumber) {
    if (animationRunning) return;
    let currentInformation = informationArray[pageNumber - 1];
    let backgroundImage = document.getElementById('main-image'); // get
    if (pageNumber !== getCurrentPage()) {
        backgroundAnimation(backgroundImage, 2); // animate
    }
    backgroundImage.src = currentInformation.src; // change src
    let mainTitle = document.getElementById("title"); // get
    mainTitle.textContent = currentInformation.title; // change the title
    textAnimation(mainTitle, 1);
    let descriptionElement = document.getElementById("description"); // get
    descriptionElement.textContent = currentInformation.description; // change the title
    textAnimation(description, 1);
    slidingAnimation(getCurrentPage(), pageNumber, 2);
    for (let i = 1; i <= numberOfPages; i++) {
        let buttonID = "line-button" + i;
        let button = document.getElementById(buttonID);
        button.classList.remove('active');
        button.textContent = '.';
    }
    // active line-button id (?)
    let activeLineButtonID = "line-button" + pageNumber;
    //make the correct button active
    let activeButton = document.getElementById(activeLineButtonID);
    if (!activeButton.classList.contains('active')) activeButton.classList.add('active');
    activeButton.textContent = pageNumber;
    animationRunning = false;
}

// sets the page for mobile
function setPageMobile(pageNumber) {
    let currentInformation = informationArray[pageNumber - 1];
    let backgroundImage = document.getElementById('mobile-main-image'); // get
    if (pageNumber !== getCurrentPage()) backgroundAnimation(backgroundImage, 2); // animate
    backgroundImage.src = currentInformation.src; // change src
    let mainTitle = document.getElementById("mobile-title"); // get
    mainTitle.textContent = currentInformation.title; // change the title
    textAnimation(mainTitle, 1);
    let descriptionElement = document.getElementById("mobile-description"); // get
    descriptionElement.textContent = currentInformation.description; // change the title
    textAnimation(descriptionElement, 1);
    // make for mobile
    slidingAnimationMobile(getCurrentPageMobile(), pageNumber, 2);
    for (let i = 1; i <= numberOfPages; i++) {
        let buttonID = "mobile-line-button" + i;
        let button = document.getElementById(buttonID);
        button.classList.remove('active');
        button.textContent = '.';
    }
    // active line-button id (?)
    let activeLineButtonID = "mobile-line-button" + pageNumber;
    //make the correct button active
    let activeButton = document.getElementById(activeLineButtonID);
    if (!activeButton.classList.contains('active')) activeButton.classList.add('active');
    activeButton.textContent = pageNumber;
    animationRunningMobile = false;
}

// returns the current page number 
function getCurrentPage() {
    let currentPage = 0;
    for (let i = 1; i <= numberOfPages; i++) {
        let buttonID = "line-button" + i;
        let button = document.getElementById(buttonID);
        if (button.textContent !== '.') {
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
        if (button.textContent !== '.') {
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
    }
    else if (currentPage + direction > numberOfPages) {
        setPage(1);
    }
    else {
        setPage(currentPage + direction);
    }
}
// 1 or -1 
// used by right or left "move-button" for mobile
function changeWithLeftRightButtonMobile(direction) {
    let currentPage = getCurrentPageMobile();
    if (currentPage + direction <= 0) {
        setPageMobile(numberOfPages);
    }
    else if (currentPage + direction > numberOfPages) {
        setPageMobile(1);
    }
    else {
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

// initially set the current page to the first page for mobile
window.scrollTo(0, 0);
setPage(1);
setPageMobile(1);

