//If the site has loaded, the event listeners will be added to the elements
document.addEventListener("DOMContentLoaded", ()=>{

    //Contains the path to the setting buttons
    let settingsButtonPath = "button.userSettings";
    //Settings dialog path
    let settingsElementPath = "div#editUser, div#editDialog";
    //Password dialog Element
    let pwDialogPath = "div#pwBox";
    //Password dialog button
    let pwButton = ".changePw";
    //Password dialog button
    let picUploadButton = ".changePic";
    //Password dialog button
    let picUploadElement = "#picUpload";
    //Click event listener for the Settings menu
    const settingsButtons = document.querySelectorAll(settingsButtonPath);
    const settingsElement = document.querySelector(settingsElementPath);
    //Goes through every button inside the webpage and assigns a click event to it
    for (const settingsButton of settingsButtons){
        settingsButton.addEventListener("click", () =>{
            if(!settingsElement.classList.contains("open")){
                //Opens the "Settings" dialog
                Dialog.openElement(settingsElementPath);

                //Closes the profilemenu from the navigation
                Dialog.closeElement(profileMenuPath);
                //Closes the navigation
                closeNav();
            }else{
                //If the Settings dialog was opened and the user
                //triggers the event if will close setting, password or
                // profile picture dialog
                Dialog.closeElement(settingsElementPath);
                Dialog.closeElement(pwDialogPath);
                Dialog.closeElement(picUploadElement);
            }
        });
    }

    //Click Event for opening and closing the password dialog
    const changePWButtons = document.querySelectorAll(pwButton);
    const changePWElement = document.querySelector(pwDialogPath);
    //Goes through every button inside the webpage and assigns a click event to it
    for (const changePWButton of changePWButtons){
        changePWButton.addEventListener("click", () =>{
            if(!changePWElement.classList.contains("open")){
                Dialog.openElement(pwDialogPath);
                Dialog.closeElement(picUploadElement);
            }else{
                Dialog.closeElement(pwDialogPath);
            }
        });
    }

    //Click Event for opening and closing the pic upload dialog
    const changePicButtons = document.querySelectorAll(picUploadButton);
    const changePicElement = document.querySelector(picUploadElement);
    //Goes through every button inside the webpage and assigns a click event to it
    for (const changePicButton of changePicButtons){
        changePicButton.addEventListener("click", () =>{
            if(!changePicElement.classList.contains("open")){
                Dialog.openElement(picUploadElement);
                Dialog.closeElement(pwDialogPath);
            }else{
                Dialog.closeElement(picUploadElement);
            }
        });
    }
});

