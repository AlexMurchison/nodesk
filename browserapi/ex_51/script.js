function runMyCode() {
    const JSONStarWars = `{
    "title": "A New Hope", 
    "episode_id": 4, 
    "species": [
      "https://swapi.co/api/species/5/", 
      "https://swapi.co/api/species/3/", 
      "https://swapi.co/api/species/2/", 
      "https://swapi.co/api/species/1/", 
      "https://swapi.co/api/species/4/"
    ]
  }`

const starWars = JSON.parse(JSONStarWars);
console.log(starWars);

const jsonResponse = document.getElementById('jsonresponse');
let title = document.createElement("h1");
title.textContent = starWars.title;
let ID = document.createElement("p");
ID.textContent = starWars.episode_id;
starWars.species.forEach((episode, index) => {
    let episodeLink = document.createElement("a");
    episodeLink.href = episode;
    episodeLink.textContent = "Link" + (index + 1);
    jsonResponse.appendChild(episodeLink);
});


}

window.onload = runMyCode;