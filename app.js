var url = "https://api.funtranslations.com/translate/minion.json"

var btn = document.querySelector(".btn-main");
var txtArea = document.querySelector("#text-area");
var outputArea = document.querySelector(".output-area")

function getTranslatedURL(text) {
    return url + "?text=" + text;
}

function errorHandler(error) {
    console.log("error occured",error)
}

function clickFunction() {
    var inputText = txtArea.value;

    fetch(getTranslatedURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputArea.innerText = translatedText;

    })
    .catch(errorHandler)
};


btn.addEventListener("click",clickFunction);











