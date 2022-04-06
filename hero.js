import {getSeriesImages } from "./utility.js";
const q = (selector) => document.querySelector(selector);
  
getSeriesImages().then((resApi) => {
    console.log(resApi)
  const createHeroImage = () => {
    const imageDiv = document.createElement("img");
    const heroTitle = document.createElement("h2");
    const blurredDiv = document.createElement("div");
    heroTitle.classList.add("titleHero");
    imageDiv.classList.add("divHero");
    blurredDiv.classList.add("blur");
    heroTitle.textContent = resApi.name;
    imageDiv.setAttribute = resApi.id;
    imageDiv.src = "https://image.tmdb.org/t/p/original/" + resApi.backdrop_path;
    q(".divhero").append(imageDiv, heroTitle, blurredDiv);
  };
  createHeroImage();
});

