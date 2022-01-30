import React, { useContext } from "react";
import AppContext from "../../context";
import { Input, Wrapper } from "./SearchFavMovies.styles";

const SearchFavMovies = () => {
  const { handleSearchFavMovies, searchFavMovies } = useContext(AppContext);
  return (
    <Wrapper>
      <Input
        placeholder="Search movies"
        type="search"
        onChange={handleSearchFavMovies}
        value={searchFavMovies}
      />
    </Wrapper>
  );
};

export default SearchFavMovies;
