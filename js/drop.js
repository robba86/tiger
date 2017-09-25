/*
    när man klickar på menyknappen
    så ska "hiddenMax500" ändras till display: block
*/

let hiddenNavButton = document.querySelector("#nav-button-max-500");

// Change .hidden-max-500 to flex
let hiddenNavWarp = document.querySelector(".hidden-max-500");

function showHideNav() {
    if (hiddenNavWarp.style.display == "flex") {
        hiddenNavWarp.style.display = "none";     
    } else {
        hiddenNavWarp.style.display = "flex";       
    }
}

function windowResize() {
    if (window.innerWidth < 500) {
        hiddenNavWarp.style.display = "none";     
    } else {
        hiddenNavWarp.style.display = "flex";          
    }
}


// Call function with event listener 
window.addEventListener("resize", windowResize);
hiddenNavButton.addEventListener("click", showHideNav);
