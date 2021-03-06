//For Navigation
const profileMenuPath = "nav #userMenue";

document.addEventListener("DOMContentLoaded", ()=>{
    //Event Listener for Navigation
   const navButton = document.querySelector("nav #button");
   const navElement = document.querySelector("nav");
    navButton.addEventListener("click", () =>{
        if(!navButton.classList.contains("open")){
            openNav();
        }else{
            closeNav();
            Dialog.closeElement(profileMenuPath)
        }
    });
    const profileButton = document.querySelector("nav #userButton");
    const profileMenue = document.querySelector("nav #userMenue");
    profileButton.addEventListener("click", () =>{
        if(!profileMenue.classList.contains("open")){
            //opens the profile menu
            Dialog.openElement(profileMenuPath);
        }else{
            //closes the profile menu
            Dialog.closeElement(profileMenuPath);
        }
    });


});


/**
 * Opens the navigation. Adds the open class to the nav button and nav element.
 */
function openNav() {
    const navButton = document.querySelector("nav #button");
    const navElement = document.querySelector("nav");
    navButton.classList.add("open");
    navElement.classList.add("open");
}

/**
 * Closes the navigation. It removes the open class from the nav button and nav element.
 */
function closeNav() {
    const navButton = document.querySelector("nav #button");
    const navElement = document.querySelector("nav");
    
    navButton.classList.remove("open");
    navElement.classList.remove("open");
}