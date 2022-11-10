

let changeTime = 5;
// key frame for background and text animation
function addKeyFrames() {
    const keyFrames = document.createElement("style");
    keyFrames.innerHTML = `
 
  @keyframes textAnimation {
    0%{
      content: "TESTIMONIAL";
    }

    12.5%{
        opacity: 0.0;
    }

    25%{
        opacity: 1;
        content: "REVIEWS";
    }


    37.5%{
        opacity: 0.0;
    }

    
    50%{
        opacity: 1;
        content: "AND";
    }

    
    62.5%{
        opacity: 0.0;
    }



    75%{
      opacity: 1;
      content: "CLIENTS";

    }
    
    87.5%{
        opacity: 0.0;
    }

    100%{
        opacity: 1;
        content: "TESTIMONIAL";
    }
  }
  
    #banner-primary-text:after {
      animation: textAnimation ${changeTime}s linear infinite;
      content: "TESTIMONIALS";
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