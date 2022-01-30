import React, { useContext } from "react";
import SearchFavMovies from "../components/SearchFavMovies/SearchFavMovies";
import AppContext from "../context";

const FavMovies = () => {
  const context = useContext(AppContext);
  const { filterFavMoviesByName } = context;

  return (
    <div>
      <SearchFavMovies />
      {filterFavMoviesByName()}
      {/* <ListMovies moviesArray={favMovies} listType={listTypes.favMovies} /> */}
    </div>
  );
};

export default FavMovies;
