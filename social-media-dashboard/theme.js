//setting the current theme variable
//changing it depending on if the checkbox is checked or not
//setting the theme in local storagte
//reading the theme from localstorage on load
//cheking the checkbox of the theme is dark on load
let body = document.querySelector('body');
let darkmode = localStorage.getItem('darkMode');
let checkbox = document.getElementById("theme-switcher");


if(darkmode == "enabled"){
    setDarkMode();
    checkbox.checked = true;
}

else{
    removeDarkMode();
}

function setDarkMode(){
    body.className = "dark";
    localStorage.setItem("darkMode", "enabled");
}


function removeDarkMode(){
    body.className = "light";
    localStorage.setItem("darkMode",null);
}


function handler() {
    if(checkbox.checked == true){
        setDarkMode();
    }
    else{
        removeDarkMode();
    }
}

checkbox.addEventListener('change', handler)