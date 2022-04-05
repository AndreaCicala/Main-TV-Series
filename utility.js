import { createPopularShows, createTopRatedShows } from "./main.js";

//FETCH CALL FOR POPULAR TV SHOWS\\
const getPopularShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=f7eae006391996939f7a8ef3e656c4d2&language=en-US&page=1",
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

getPopularShows().then((resApi) => {
  let entries = Object.entries(resApi)[1];
  entries[1].map((elem) => {
    createPopularShows(
      elem.name,
      elem.poster_path,
      elem.genre_ids,
      elem.id,
      elem.vote_average
    );
  });
});
//FETCH CALL FOR TOP RATED TV SHOWS\\
const getTopRatedTv = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=f7eae006391996939f7a8ef3e656c4d2&language=en-US&page=1",
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

getTopRatedTv().then((resApi) => {
  let entries = Object.entries(resApi)[1];
  entries[1].map((element) => {
    createTopRatedShows(
      element.name,
      element.poster_path,
      element.genre_ids,
      element.id,
      element.vote_average
    );
  });
});

export { getPopularShows, getTopRatedTv };
