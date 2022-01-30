import React from "react";
import Movie from "../Movie/Movie";
import { List, Wrapper } from "./ListMovies.styles";

const ListMovies = ({ moviesArray, listType }) => {
  return (
    <Wrapper listType={listType}>
      <List>
        {moviesArray.map((singleMovie) => (
          <li key={singleMovie.id}>
            <Movie {...singleMovie} listType={listType} />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default ListMovies;
