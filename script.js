// JavaScript Document

// variabele aan en die vullen we met de artikelen (nu maar 1)
var klikbaarartikel = document.querySelectorAll("article.artikel");

// registreren wanneer er op een artikel wordt geklikt en de functie beloptel uitvoeren
klikbaarartikel[0].addEventListener("click", beloptel);
klikbaarartikel[1].addEventListener("click", beloptel);
klikbaarartikel[2].addEventListener("click", beloptel);

// de functie beloptel
function beloptel(event) {
 
// let = een variabele die niet overschreden mag worden
// In de variabele belaantal wat er in de span staat
  let belaantal = document.querySelector(".teller span"); 
  // we laden die waarde in in een nieuwe variabele  
  let belwaarde = belaantal.innerHTML;
  // die variabele zetten we om in een getal -> interger (heel nummer)
  belwaarde = parseInt(belwaarde);

  //nieuwe variabele aanmaken voor de nieuwe waarde
  let belnieuwaantal;

  // de nieuwe waarde is de oude waarde plus 1
  belnieuwaantal = belwaarde + 1;
  
  // inladen in de HTML 
  belaantal.innerHTML = belnieuwaantal;
}
