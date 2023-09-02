let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/A.png") {
        myImage.setAttribute("src", "images/B.jpg");
    } else {
        myImage.setAttribute("src", "images/A.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("name?");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla " + storedName;
}
myButton.onclick = function () {
    setUserName();
};

