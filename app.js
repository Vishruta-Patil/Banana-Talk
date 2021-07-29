var btn = document.querySelector(".btn-main");
var txtArea = document.querySelector("#text-area");
var outputArea = document.querySelector(".output-area")

function clickFunction() {
    console.log("Clicked")
    console.log(txtArea.value)
    // outputArea.innerText("I love you DAD")
}

btn.addEventListener("click",clickFunction);












