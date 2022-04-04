import {getTopRatedShows} from './utility.js';


const topRatedTV = (title, tagline, poster_path, release_date, genres, id) => {
    const cardDiv = document.createElement("div");
    const cardTitle =  document.createElement("h3");
    const genreHeadTitle =  document.createElement("h4");
    const cardTagline =  document.createElement("p");
    const cardPoster =  document.createElement("img");
    const cardDate =  document.createElement("p");
    const cardGenres =  document.createElement("p");

    cardDiv.classList.add("card");
    cardTitle.classList.add("cardTitle");
    genreHeadTitle.classList.add("genreTitle");
    cardTagline.classList.add("cardOverview");
    cardPoster.classList.add("cardImg");
    cardDate.classList.add("cardDate");
    cardGenres.classList.add("cardGenres");

   // cardTitle.textContent = title;
  //  cardTagline.textContent = tagline;
    genreHeadTitle.textContent = "Top Rated TV Shows"
    cardPoster.src = "https://image.tmdb.org/t/p/original/" + poster_path;
    //cardDate.textContent =  release_date;
   // cardGenres.textContent =  genres;

    cardDiv.append(cardTitle, cardTagline, cardPoster, cardDate, cardGenres);
    document.querySelector(".top-rated-series").appendChild(cardDiv)
    
};




//Input Search
const q = (selector) => document.querySelector(selector);
q(".fa-search").addEventListener("click", () => {
    const searchInput = q(".searchInp");
    (searchInput.setAttribute("type", "text"));
   
});



export {topRatedTV}