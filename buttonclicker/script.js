function signOff(element) {
    if(element.innerText == "login") {
        element.innerText = "logout";
    }else {
        element.innerText = "login";
    }
}

function like() {
    console.log("Ninja was liked")
}

function hide(element) {
    element.remove();
}
