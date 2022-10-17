

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








function startInterval() {
    addKeyFrames();
}

startInterval();