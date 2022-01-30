export const getFavMoviesFromLocalStorage = () => {
  let localStorageFavMovies;

  if (localStorage.getItem("favMovies")) {
    localStorageFavMovies = JSON.parse(localStorage.getItem("favMovies"));
  } else {
    localStorageFavMovies = [];
  }
  return localStorageFavMovies;
};

export const getPageNumberFromLocalStorage = () => {
  let localStoragePageNumber;

  if (localStorage.getItem("pageNumber")) {
    localStoragePageNumber = JSON.parse(localStorage.getItem("pageNumber"));
  } else {
    localStoragePageNumber = 1;
  }
  return localStoragePageNumber;
};
