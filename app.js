var translatebtn = document.querySelector("#translate");
var inputtext = document.querySelector("#txt-inp");
var outputtext = document.querySelector("#output-txt");
var serverURL = "https://api.funtranslations.com/translate/groot.json"
function geturl(input) {
    return serverURL + "?" + "text=" + input
}
function errorcheck(error) {
    console.log("error appeared", error);
    alert("some technical issue try later")
}

function clickhappens() {
    var inputText = inputtext.value;
    fetch(geturl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            outputtext.innerText = translatedtext;
        })
        .catch(errorcheck);
};
translatebtn.addEventListener("click", clickhappens)