import { getPopularShows, getTopRatedTv, getTvDetails } from "./utility.js";

const createRedirectedPage = (title, poster_path, genre_id, id, vote_average, popularity, overview) => {


}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

getTvDetails(params.id).then((data) => {
    console.log(data);
})