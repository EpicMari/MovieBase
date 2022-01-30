import React, { useContext } from "react";
import AppContext from "../../context";
import { Button, Form, Input, Wrapper } from "./Home.styles";
import { AiOutlineSearch } from "react-icons/ai";

const Home = () => {
  const {
    searchMovies,
    handleSearchMoviesChange,
    filterMoviesByName,
    handleSearchMoviesSubmit,
  } = useContext(AppContext);

  return (
    <Wrapper>
      <Form onSubmit={handleSearchMoviesSubmit}>
        <Input
          type="text"
          placeholder="Search movie"
          value={searchMovies}
          onChange={handleSearchMoviesChange}
        />
        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      </Form>
      {filterMoviesByName()}
    </Wrapper>
  );
};

export default Home;
