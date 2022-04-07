import { getPopularShows, getTopRatedTv, getHomePageBg } from "./utility.js";
const q = (selector) => document.querySelector(selector);

//Input Search expand
const searchIcon = q(".search-box__icon");
const searchBox = q(".search-box");
searchIcon.addEventListener("click",  () => {
  searchBox.classList.toggle("active");

});
//
const createPopularShows = (title, poster_path, genre_id, id, vote_average, popularity, overview) => {
  const cardDiv = document.createElement("div");
  const cardTitle = document.createElement("h3");
  const cardPoster = document.createElement("img");
  const cardVote = document.createElement("p");
  const cardLink = document.createElement("a");
  const tvPopularity = document.createElement("p");
  const tvOverview = document.createElement("p");

  cardDiv.classList.add("card");
  cardTitle.classList.add("cardTitle");
  cardPoster.classList.add("cardImg");
  cardVote.classList.add("seriesVote");
  tvOverview.classList.add("overview");
  tvPopularity.classList.add("popularity");

  cardTitle.textContent = title;
  tvOverview.textContent = overview;
  tvPopularity.textContent = popularity;
  cardDiv.setAttribute("movie", id);
  cardLink.href = "/tv-series.html?id=" + id;
  cardPoster.src = "https://image.tmdb.org/t/p/original/" + poster_path;
  cardVote.textContent = "Rating: " + vote_average + "/10";

  cardLink.append(cardPoster, cardTitle, cardVote,)
  cardDiv.append(cardLink);
  document.querySelector(".popular-series").appendChild(cardDiv);
  

  //CARD DETAILS VISIBILITY ON MOUSE OVER
  cardDiv.addEventListener("mouseover", () => {
    cardTitle.style.visibility = "visible";
    cardVote.style.visibility = "visible";
    cardDiv.addEventListener("mouseleave", () => {
      cardTitle.style.visibility = "hidden";
      cardVote.style.visibility = "hidden";
    });
  });
};
//CARDS SCROLL BEHAVIOR\\
const getCardsScroll = () => {
    const cardWidth = 200;
    let divPopSeries = q(".popular-series");
    let numberVisibleCard = Math.floor(divPopSeries.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
}
q("#slide-right").addEventListener("click", () => {
    q(".popular-series").scrollLeft += getCardsScroll();
  });
  q("#slide-left").addEventListener("click", () => {
    q(".popular-series").scrollLeft += -1 * getCardsScroll();
  });
  q("#slide-right").addEventListener("click", () => {
    q("#slide-left").style.visibility = "visible";
  });
//
const createTopRatedShows = (title, poster_path, genre_id, id, vote_average, popularity, overview) => {
    const cardDiv = document.createElement("div");
    const cardTitle = document.createElement("h3");
    const cardPoster = document.createElement("img");
    const cardVote = document.createElement("p");
    const cardLink = document.createElement("a");
    const tvPopularity = document.createElement("p");
    const tvOverview = document.createElement("p");
  
    cardDiv.classList.add("card2");
    cardTitle.classList.add("cardTitle2");
    cardPoster.classList.add("cardImg2");
    cardVote.classList.add("seriesVote2");
    tvOverview.classList.add("overview2");
    tvPopularity.classList.add("popularity2");
  
    cardTitle.textContent = title;
    tvOverview.textContent = overview;
    tvPopularity.textContent = popularity;
    cardDiv.setAttribute("movie", id);
    cardLink.href = "/tv-series.html?id=" + id;
    cardPoster.src = "https://image.tmdb.org/t/p/original/" + poster_path;
    cardVote.textContent = "Rating: " + vote_average + "/10";
  
    cardLink.append(cardPoster, cardTitle, cardVote,);
    cardDiv.append(cardLink);
    document.querySelector(".top-rated-series").appendChild(cardDiv);

//ITEMS VISIBILITY ON MOUSE OVER
  cardDiv.addEventListener("mouseover", () => {
    cardTitle.style.visibility = "visible";
    cardVote.style.visibility = "visible";
    cardDiv.addEventListener("mouseleave", () => {
      cardTitle.style.visibility = "hidden";
      cardVote.style.visibility = "hidden";
    });
  });
};
//REDIRECT TO INFO BUTTON ON HERO IMAGE
getHomePageBg().then((resApi) => {
  const createHeroDetail = () => { 
  const buttonDiv = document.createElement("div")
  const moreInfo = document.createElement("button");
  const cardLink = document.createElement("a");
  cardLink.href = "/tv-series.html?id=" + resApi.id;

  buttonDiv.classList.add("div-button");
  moreInfo.classList.add("hero-button");
  moreInfo.textContent = 'More Info'

  cardLink.append(moreInfo);
  buttonDiv.append(cardLink);
  document.querySelector(".divhero").appendChild(buttonDiv);
};
  createHeroDetail();
})
//CARDS SCROLL BEHAVIOUR\\
q("#slide-right2").addEventListener("click", () => {
  q(".top-rated-series").scrollLeft += getCardsScroll();
});
q("#slide-left2").addEventListener("click", () => {
  q(".top-rated-series").scrollLeft += -1 * getCardsScroll();
});
q("#slide-right2").addEventListener("click", () => {
  q("#slide-left2").style.visibility = "visible";
});

//HEADER BEHAVIOUR\\
let myNav = q(".main-header");
window.onscroll = function () {
  "use strict";
  myNav.scrollTop = 0;
  if (myNav.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
    myNav.classList.add("main-header-scrolled");
  } else {
    myNav.classList.remove("main-header-scrolled");
  }
};

// GENERATE HTML




getPopularShows().then((resApi) => {
    let entries = Object.entries(resApi)[1];
    entries[1].map((elem) => {
      createPopularShows(
        elem.name,
        elem.poster_path,
        elem.genre_ids,
        elem.id,
        elem.vote_average,
        elem.overview,
        elem.popularity
      );
    });
});

getTopRatedTv().then((resApi) => {
    let entries = Object.entries(resApi)[1];
    entries[1].map((elem) => {
        createTopRatedShows(
          elem.name,
          elem.poster_path,
          elem.genre_ids,
          elem.id,
          elem.vote_average,
          elem.overview,
          elem.popularity
        );
    });
});

