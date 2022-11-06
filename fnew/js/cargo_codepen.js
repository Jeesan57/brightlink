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
let animationRunningMobile = false;

// number of pages that should be shown in the caraousel slider
let numberOfPages = informationArray.length;


function showContent(pageNumber) {
    let contents = document.getElementsByClassName('top-content');

    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    let showContent = document.getElementsByClassName(`content-${pageNumber}`)[0];
    showContent.style.display = "flex";

}
function showContentMobile(pageNumber) {
    let contents = document.getElementsByClassName('content-mobile');

    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    let showContentMobile = document.getElementsByClassName(`content-mobile-${pageNumber}`)[0];
    showContentMobile.style.display = "flex";
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


    element.removeAttribute("id");
    let id = ("getID" + exploreLink).split("#")[1];
    element.setAttribute("id", id);
}

// sets the page for web
function setPage(pageNumber) {
    showContent(pageNumber);
    let currentInformation = informationArray[pageNumber - 1];
    let backgroundImage = document.getElementById("main-image"); // get
    if (pageNumber !== getCurrentPage()) {
        backgroundAnimation(backgroundImage, 2); // animate
    }
    backgroundImage.src = currentInformation.src; // change src
    let mainTitle = document.getElementsByClassName(`title-${pageNumber}`)[0]; // get
    textAnimation(mainTitle, 1);


    let descriptionElement = document.getElementsByClassName(`description-${pageNumber}`)[0]; // get
    textAnimation(descriptionElement, 1);

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
    animationRunning = false;
}

// sets the page for mobile
function setPageMobile(pageNumber) {

    showContentMobile(pageNumber);


    let currentInformation = informationArray[pageNumber - 1];
    let backgroundImage = document.getElementById("mobile-main-image"); // get
    if (pageNumber !== getCurrentPage()) backgroundAnimation(backgroundImage, 2); // animate
    backgroundImage.src = currentInformation.src; // change src



    let mainTitle = document.getElementsByClassName(`mobile-title-${pageNumber}`)[0]; // get
    textAnimation(mainTitle, 1);



    let descriptionElement = document.getElementsByClassName(`mobile-description-${pageNumber}`)[0]; // get
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

function setContainerSize(isExpanded, container, pageNumber) {
    let height = 1000;
    if (window.matchMedia('(max-width: 500px)').matches) {
        console.log("500");
        if (isExpanded) {
            if (pageNumber === 2) {

                height = 3300;
            }
            else if(pageNumber === 6 || pageNumber === 7)
            {
                height = 1400;
            }
            else {
                height = 1800;
            }
        }
        else {
            height = 1100;
        }
    }
    else if (window.matchMedia('(max-width: 600px)').matches) {
        console.log("600");
        if (isExpanded) {
            if (pageNumber === 2) {

                height = 2500;
            }
            else if(pageNumber === 6 || pageNumber === 7)
            {
                height = 1200;
            }
            else {
                height = 1800;
            }
        }
        else {
            height = 1000;
        }
    }

    else if (window.matchMedia('(max-width: 700px)').matches) {
        console.log("700");

        if (isExpanded) {
            if (pageNumber === 2) {

                height = 2200;
            }
            else if(pageNumber === 6 || pageNumber === 7)
            {
                height = 1000;
            }
            else {
                height = 1500;
            }
        }
        else {
            height = 900;
        }
    }

    else if (window.matchMedia('(max-width: 800px)').matches) {
        if (isExpanded) {
            if (pageNumber === 2) {

                height = 1900;
            }
            else if(pageNumber === 6 || pageNumber === 7)
            {
                height = 1000;
            }
            else {
                height = 1200;
            }
        }
        else {
            height = 850;
        }
    }

    else if (window.matchMedia('(max-width: 900px)').matches) {
        if (isExpanded) {
            if (pageNumber === 2) {

                height = 1800;
            }
            else if(pageNumber === 6 || pageNumber === 7)
            {
                height = 900;
            }
            else {
                height = 1200;
            }
        }
        else {
            height = 850;
        }
    }
    else {
        console.log('greater than 900');
        if (isExpanded) {
            if (pageNumber === 2) {

                height = 1300;
            }
            else if(pageNumber === 6 || pageNumber === 7)
            {
                height = 570;
            }
            else {
                height = 900;
            }
        }
        else {
                height = 650;
        }
    }
    container.style.height = `${height}px`;

}

function readMoreOrLess(pageNumber) {
    let more = document.getElementsByClassName(`more-${pageNumber}`)[0];

    let container = document.getElementsByClassName("list")[0];

    let button = document.getElementsByClassName(`explore-button-${pageNumber}`)[0];
    if (more.style.display === "none") {
        more.style.display = "inline";
        button.textContent = "Read Less";
        setContainerSize(true, container, pageNumber);

    }
    else {
        more.style.display = "none";
        button.textContent = "Explore Services";
        setContainerSize(false, container, pageNumber);
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


function start() {
    let container = document.getElementsByClassName("list")[0];


    // find current anchor link (if any)
    let link = location.href;
    let splitted = link.split("#")[1];
    if (!splitted) {
        // initially set the current page to the first page for mobile
        // window.scrollTo(0, 0);
        setPage(1);
        setPageMobile(1);
        setContainerSize(false, container, 1);
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
        setPageMobile(page);
        setContainerSize(false, container, pageNumber);
    }

}

start();
