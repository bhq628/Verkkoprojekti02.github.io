function getPlanet() {
  let planetName = document.getElementById("inputField").value;

  // Aseta correctPlanet ja incorrectPlanet ilmoitukset
  let correctPlanet = "Oikein!";
  let incorrectPlanet = "Väärin!";

  //  Tarkista, vastaako planetName oikeiden aurinkokunnan planeettojen nimiä
  if (planetName == "Merkurius" || planetName == "merkurius") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green"; // Green-väri oikeaan vastaukseen
  } else if (planetName == "Saturnus" || planetName == "saturnus") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else if (planetName == "Uranus" || planetName == "uranus") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else if (planetName == "Neptunus" || planetName == "neptunus") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else if (planetName == "Mars" || planetName == "mars") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else if (planetName == "Maa" || planetName == "maa") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else if (planetName == "Venus" || planetName == "venus") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else if (planetName == "Jupiter" || planetName == "jupiter") {
    document.getElementById("answer").innerHTML = correctPlanet;
    document.getElementById("answer").style.color = "green";
  } else {
    document.getElementById("answer").innerHTML = incorrectPlanet;
    document.getElementById("answer").style.color = "red"; // Red-väri väärään vastaukseen
  }
}
