import React, { useContext } from "react";
import ListMovies from "../../components/ListMovies/ListMovies";
import Pagination from "../../components/Pagination/Pagination";
import AppContext from "../../context";
import { listTypes } from "../../helpers/listType";
import { Wrapper } from "./Movies.styles";

const Movies = () => {
  const { movies } = useContext(AppContext);

  return (
    <Wrapper>
      <ListMovies moviesArray={movies} listType={listTypes.movies} />
      <Pagination />
    </Wrapper>
  );
};

export default Movies;
