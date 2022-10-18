

let changeTime = 3;
// key frame for background and text animation
function addKeyFrames() {
    const keyFrames = document.createElement("style");
    keyFrames.innerHTML = `
 
  @keyframes textAnimation {
    0%{
      content: "MOVING QUOTES";
    }
  
    50%{
      opacity: 0;
    }


    100%{
      content: "ONLINE RELOCATION QUOTE";

    }
  }
  
    #banner-primary-text:after {
      animation: textAnimation ${changeTime}s linear infinite alternate;
      content: "MOVING QUOTES";
      display: block;
      z-index: 15;
    }
    
  `;
    document.head.appendChild(keyFrames);
}








function startInterval() {
    addKeyFrames();
}

startInterval();