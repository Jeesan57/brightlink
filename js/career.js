

let changeTime = 3;
// key frame for background and text animation
function addKeyFrames() {
    const keyFrames = document.createElement("style");
    keyFrames.innerHTML = `
 
  @keyframes textAnimation {
    0%{
      content: "CAREER";
    }
  
    50%{
      opacity: 0;
    }


    100%{
      content: "JOB VACANCIES";

    }
  }
  
    #banner-primary-text:after {
      animation: textAnimation ${changeTime}s linear infinite alternate;
      content: "A";
      display: block;
    }
    
  `;
    document.head.appendChild(keyFrames);
}








// start interval for changing page every ${changeTime} second
function startInterval() {
    // window.setInterval(function () {
    //     let primaryText = document.getElementById("banner-primary-text");
    //     primaryText.textContent =   (primaryText.textContent === "CAREER") ? "JOB VACANCIES" : "CAREER";
    // }, changeTime * 1000);
    addKeyFrames();
}

startInterval();