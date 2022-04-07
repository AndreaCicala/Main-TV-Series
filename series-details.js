import { getTvDetails, getSeriesBg } from "./utility.js";

const q = (selector) => document.querySelector(selector);
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

getTvDetails(params.id).then((data) => {
    const createRedirectedPage =  ()  => {
        const detailDiv = document.createElement("div");
        const structureDiv = document.createElement("div");
        const detailName = document.createElement("h2");
        const detailImg = document.createElement("img");
        const avgVote = document.createElement("p");
        const lastEpisode = document.createElement("p");
        const detailOverview = document.createElement("p");
        const genresDetail = document.createElement("p");
        const textDetailsDiv = document.createElement("div")
    

        detailName.textContent = data.name;
        avgVote.innerHTML = `<p class="ratings">${"Ratings:"}</p> ${data.vote_average}`;
        lastEpisode.innerHTML = `<p class="last-episode-text">${"Last Episode: "}</p> ${data.last_air_date}`;
        detailOverview.textContent = data.overview;
        genresDetail.innerHTML = `<p class="genres-text">${"Genres: "}</p>`+ data.genres.map(item => item.name).join(", ");
        detailImg.src ="https://image.tmdb.org/t/p/original/" + data.backdrop_path;
        structureDiv.classList.add("structure-div");
        detailDiv.classList.add("detail-div");
        detailName.classList.add("detail-name");
        detailImg.classList.add("detail-img");
        avgVote.classList.add("average-vote");
        lastEpisode.classList.add("last-episode");
        detailOverview.classList.add("overview");
        genresDetail.classList.add("genres"); 
        textDetailsDiv.classList.add("text-detail")

        detailDiv.append(detailName, detailImg, );
        q(".detailed-series").appendChild(detailDiv);
        textDetailsDiv.append(detailOverview, avgVote, lastEpisode, genresDetail);
        structureDiv.appendChild(textDetailsDiv);
        q(".detail-div").appendChild(structureDiv);
    }; 
    createRedirectedPage();
});

getSeriesBg(params.id).then((data)  => {
  const createDetailBg = () => {
    const imageDiv = document.createElement("img");
    imageDiv.classList.add("divHero");
    imageDiv.setAttribute= data.id;
    imageDiv.src = "https://image.tmdb.org/t/p/original/" + data.backdrop_path;
    q(".detail-div").append(imageDiv);
  };
  createDetailBg();
});

