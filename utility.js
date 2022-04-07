const baseURL = "https://api.themoviedb.org/3";
const apiKey = "f7eae006391996939f7a8ef3e656c4d2";
const language = "en-US";

const getURL = (url = '') => `${baseURL}/${url}?api_key=${apiKey}&language=${language}`;

//FETCH CALL FOR POPULAR TV SHOWS\\
const getPopularShows = async () => {
  const res = await fetch(
    getURL("tv/popular"),
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

//FETCH CALL FOR TOP RATED TV SHOWS\\
const getTopRatedTv = async () => {
  const res = await fetch(
    getURL("tv/top_rated") + "&page=1",
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

//FETCH CALL FOR TV ID'S
const getTvDetails = async (id) => {
  const res = await fetch(
    getURL(`tv/${id}`),
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

//FETCH CALL FOR BACKGROUND IMAGE
const getHomePageBg = async () => {
  const res = await fetch(
    getURL(`tv/${1429}`),
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

//
const getSeriesBg = async (id) => {
  const res = await fetch(
    getURL(`tv/${id}`),
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
export { getPopularShows, getTopRatedTv, getTvDetails, getHomePageBg, getSeriesBg};
