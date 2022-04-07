import { getTvDetails, getRecommendedSeries, getVideos} from "./utility.js";

const q = (selector) => document.querySelector(selector);
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

getTvDetails(params.id).then((data) => {
  const detailDiv = document.createElement("div");
  const structureDiv = document.createElement("div");
  const detailName = document.createElement("h2");
  const detailImg = document.createElement("img");
  const avgVote = document.createElement("p");
  const lastEpisode = document.createElement("p");
  const detailOverview = document.createElement("p");
  const genresDetail = document.createElement("p");
  const textDetailsDiv = document.createElement("div");
  const similarTitlesDiv = document.createElement("div");
  const overviewDiv = document.createElement("div");
  const similarTitles = document.createElement("h2");
  const imageDiv = document.createElement("img");
  const detailedDiv = q(".detailed-series");

  detailName.textContent = data.name;
  avgVote.innerHTML = `<p class="ratings">${"Ratings:"}</p> ${data.vote_average}`;
  lastEpisode.innerHTML = `<p class="last-episode-text">${"Last Episode: "}</p> ${data.last_air_date}`;
  detailOverview.textContent = data.overview;
  genresDetail.innerHTML = `<p class="genres-text">${"Genres: "}</p>`+ data.genres.map(item => item.name).join(", ");
  similarTitles.textContent = "Similar Titles: "
  structureDiv.classList.add("structure-div");
  detailDiv.classList.add("detail-div");
  detailName.classList.add("detail-name");
  detailImg.classList.add("detail-img");
  avgVote.classList.add("average-vote");
  lastEpisode.classList.add("last-episode");
  detailOverview.classList.add("overview");
  genresDetail.classList.add("genres"); 
  textDetailsDiv.classList.add("text-detail")
  similarTitlesDiv.classList.add("similar-titles-div");
  similarTitles.classList.add("similar-titles");
  overviewDiv.classList.add("overview-div");
  imageDiv.classList.add("divHero");
  imageDiv.setAttribute= data.id;
  imageDiv.src = "https://image.tmdb.org/t/p/original/" + data.backdrop_path;
  detailImg.src ="https://image.tmdb.org/t/p/original/" + data.backdrop_path;

  detailedDiv.append(imageDiv, detailName);
  

//CARDS SCROLL
  const getCardsScroll = () => {
    const cardWidth = 200;
    let divPopSeries = q(".recommended");
    let numberVisibleCard = Math.floor(divPopSeries.offsetWidth / cardWidth);
    return numberVisibleCard * cardWidth;
  }
  q("#slide-right").addEventListener("click", () => {
    q(".recommended").scrollLeft += getCardsScroll();
  });
  q("#slide-left").addEventListener("click", () => {
    q(".recommended").scrollLeft += -1 * getCardsScroll();
  });
  q("#slide-right").addEventListener("click", () => {
    q("#slide-left").style.visibility = "visible";
  });
  
  getRecommendedSeries(params.id).then((data) => {
    const createRecommendedSeries = (title, poster_path, genre_id, id, popularity, overview) => {
      const cardDiv = document.createElement("div");
      const cardTitle = document.createElement("h3");
      const cardPoster = document.createElement("img");
      const cardLink = document.createElement("a");
      const tvPopularity = document.createElement("p");
      const tvOverview = document.createElement("p");

      cardDiv.classList.add("card");
      cardTitle.classList.add("cardTitle");
      cardPoster.classList.add("cardImg");
      tvOverview.classList.add("overview");
      tvPopularity.classList.add("popularity");

      cardTitle.textContent = title;
      tvOverview.textContent = overview;
      tvPopularity.textContent = popularity;
      cardDiv.setAttribute("movie", id);
      cardLink.href = "/tv-series.html?id=" + id;
      cardPoster.src = "https://image.tmdb.org/t/p/original/" + poster_path;

      cardLink.append(cardPoster, cardTitle)
      cardDiv.append(cardLink);

      //CARD DETAILS VISIBILITY ON MOUSE OVER
      cardDiv.addEventListener("mouseover", () => {
        cardTitle.style.visibility = "visible";
        cardDiv.addEventListener("mouseleave", () => {
          cardTitle.style.visibility = "hidden";
        });
      });
      q(".recommended").appendChild(cardDiv);
    };

    data.results.forEach((elem) => {
      createRecommendedSeries(
        elem.name,
        elem.poster_path,
        elem.genre_ids,
        elem.id,
        elem.vote_average,
        elem.overview,
        elem.popularity
      );console.log(data)
    })
  });
});

