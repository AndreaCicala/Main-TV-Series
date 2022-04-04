import { topRatedTV } from "./main.js";

const getTopRatedShows = async () => {
    const res = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=f7eae006391996939f7a8ef3e656c4d2&language=en-US&page=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (res.status >= 200 && res.status <= 299) {
      return await res.json();
    }
  };
  
  getTopRatedShows().then((resApi) => {
    let entries = Object.entries(resApi)[1];
    console.log(entries)
    entries[1].map((element) => {
      topRatedTV(
      element.name,
      element.tagline,
      element.poster_path,
      element.first_air_date,
      element.genre_ids,
      element.id
    )
  }
  )});

export {getTopRatedShows}