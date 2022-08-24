
/*    Persistant Background    */

function changeBackgroundColor(){

    if(document.getElementById("mode").className == "bi bi-brightness-high-fill"){
        localStorage.setItem("pageStyle", "lightMode");
        document.getElementById("mode").className = "bi bi-moon-stars-fill";
        document.getElementById("body").style.color = "black";
        document.getElementById("body").className = "backLight";
        for(let i = 0; i<document.querySelectorAll("#title").length; i++) {
            document.querySelectorAll("#title")[i].className = "hLight";
        }
        for (let i = 0; i < document.querySelectorAll("#box").length; i++) {
            document.querySelectorAll("#box")[i].className = "col box light";
        }
    }
    else{
        localStorage.setItem("pageStyle", "darkMode");
        document.getElementById("mode").className = "bi bi-brightness-high-fill";
        document.getElementById("body").style.color = "white";
        document.getElementById("body").className = "backDark";
        for(let i = 0; i<document.querySelectorAll("#title").length; i++) {
            document.querySelectorAll("#title")[i].className = "hDark";
        }
        for (let i = 0; i < document.querySelectorAll("#box").length; i++) {
            document.querySelectorAll("#box")[i].className = "col box dark";
        }
    }
}

function setBackgroundColor() {
    if(!localStorage.getItem("pageStyle")) {
        localStorage.setItem("pageStyle", "darkMode")
    }

    if(localStorage.getItem("pageStyle") == "lightMode") {
        document.getElementById("mode").className = "bi bi-moon-stars-fill";
        document.getElementById("body").style.color = "black";
        document.getElementById("body").className = "backLight";
        for(let i = 0; i<document.querySelectorAll("#title").length; i++) {
            document.querySelectorAll("#title")[i].className = "hLight";
        }
        for (let i = 0; i < document.querySelectorAll("#box").length; i++) {
            document.querySelectorAll("#box")[i].className = "col box light";
        }
    }
    else {
        document.getElementById("mode").className = "bi bi-brightness-high-fill";
        document.getElementById("body").style.color = "white";
        document.getElementById("body").className = "backDark";
        for(let i = 0; i<document.querySelectorAll("#title").length; i++) {
            document.querySelectorAll("#title")[i].className = "hDark";
        }
        for (let i = 0; i < document.querySelectorAll("#box").length; i++) {
            document.querySelectorAll("#box")[i].className = "col box dark";
        }
    }
}

window.onload = function() {
    setBackgroundColor();
}

/*    Delay on certain items    */

function DelayloadingImages() {
    var imgDiv = document.getElementById("delay");
    imgDiv.innerHTML = "<iframe src='https://drive.google.com/file/d/1T793Dyo7x1v2fFgUBXlaOV8klNz6Gvp7/preview' width='740' height='580'>";
}

setTimeout("DelayloadingImages()", 500);