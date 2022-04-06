import { getPopularShows } from "./utility.js";
const q = (selector) => document.querySelector(selector);

const getSeriesImages = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/1429?api_key=f7eae006391996939f7a8ef3e656c4d2&language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.status >= 200 && res.status <= 299) {
    return await res.json();
  }
};
    
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
