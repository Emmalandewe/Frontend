// JavaScript Document



var groenThema; // variabele aanmaken
var body; // variabele aankaken voor body

groenThema = document.querySelector("footer button"); //waar in je code staat deze variabele
body = document.querySelector("body"); //java weet eerst nog niet wat body is. -> nu weet java wat body is. 

groenThema.addEventListener("click", doeGroeneThema); //aanroepen van de variabele

function doeGroeneThema(){ //maak functie aan
    body.classList.toggle("groen");
}








