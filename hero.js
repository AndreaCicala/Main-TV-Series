import {getHomePageBg } from "./utility.js";
const q = (selector) => document.querySelector(selector);
  
getHomePageBg().then((resApi) => {
  const createHeroImage = () => {
    const imageSrc = document.createElement("img");
    const heroTitle = document.createElement("h2");
    const blurredDiv = document.createElement("div");

    heroTitle.classList.add("titleHero");
    imageSrc.classList.add("imgHero");
    blurredDiv.classList.add("blur");
    heroTitle.textContent = resApi.name;
    imageSrc.setAttribute = resApi.id;
    imageSrc.src = "https://image.tmdb.org/t/p/original/" + resApi.backdrop_path;
    
    q(".background-image").append(imageSrc,heroTitle, blurredDiv);
  
  };
  createHeroImage();
});

