var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text" + input
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json)
        .then(json => {
            var translatedText = json.contents.translate;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

function errorHandler(error) {
    console.log("Error Occoured", error);
    alert("Something wrong with server! try again after some time")
}

btnTranslate.addEventListener("click", clickHandler)