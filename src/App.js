import React, { Component } from "react";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import AppContext from "./context";
import { GlobalStyle } from "./globalStyles/globalStyles";
import Router from "./routing/Router";
import { themes } from "./themes/themes";
import {
  getFavMoviesFromLocalStorage,
  getPageNumberFromLocalStorage,
} from "./helpers/localStorageGetters";
import { Wrapper } from "./App.styles";
import { listTypes } from "./helpers/listType";
import ListMovies from "./components/ListMovies/ListMovies";

class App extends Component {
  state = {
    movies: [],
    favMovies: getFavMoviesFromLocalStorage(),
    searchFavMovies: "",
    searchMovies: "",
    searchedFilterMovies: [],
    pageNumber: getPageNumberFromLocalStorage(),
    imgUrl: "https://image.tmdb.org/t/p/w500/",
    isActive: false,
    query: "",
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.getMovies();
    }
    if (prevState.favMovies !== this.state.favMovies) {
      this.setFavMoviesToLocalStorage();
    }
    if (prevState.pageNumber !== this.state.pageNumber) {
      this.setPageNumberToLocalStorage();
    }
    if (prevState.searchFavMovies !== this.state.searchFavMovies) {
      this.filterFavMoviesByName();
    }
    if (prevState.query !== this.state.query) {
      this.getSearchedMovies();
    }
  }

  checkIfMovieIsInFavList = (movieId) => {
    let isMovieInFav = false;

    this.state.favMovies.forEach((movie) => {
      if (movie.id === movieId) {
        isMovieInFav = true;
      }
    });

    return isMovieInFav;
  };

  updateMovies = (movieId, movieType) => {
    const { movies, searchedFilterMovies } = this.state;
    let moviesArray = movieType !== "searched" ? movies : searchedFilterMovies;

    return moviesArray.map((movie) => {
      return movie.id === movieId
        ? {
            ...movie,
            isInFav: !movie.isInFav,
          }
        : movie;
    });
  };

  addToFav = (movieId, movieType) => {
    const { movies, searchedFilterMovies, favMovies } = this.state;
    const moviesArray =
      movieType !== "searched" ? movies : searchedFilterMovies;
    const selectedMovie = moviesArray.find((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          isInFav: true,
        };
      }
    });
    if (this.checkIfMovieIsInFavList(movieId)) {
      this.setState({
        favMovies: [...new Set([...favMovies])],
      });
    }
    if (movieType !== "searched") {
      this.setState({
        favMovies: [...new Set([...favMovies, selectedMovie])],
        movies: [...this.updateMovies(movieId)],
      });
    } else {
      this.setState({
        favMovies: [...new Set([...favMovies, selectedMovie])],
        searchedFilterMovies: [...this.updateMovies(movieId, "searched")],
      });
    }
  };

  getMovies = () => {
    const { pageNumber } = this.state;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`
      )
      .then((res) => {
        this.checkFavMoviesList([...res.data.results]);
      })
      .catch((err) => console.log(err));
  };

  getSearchedMovies = () => {
    const { query } = this.state;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US&page=1`
      )
      .then((res) => {
        this.checkFavMoviesList([...res.data.results], "searchedMovies");
      })
      .catch((err) => console.log(err));
  };

  increasePageNumber = () => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + 1,
    }));
    this.pageToTop();
  };
  decreasePageNumber = () => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber - 1,
    }));
    this.pageToTop();
  };

  checkFavMoviesList = (movieArray, props) => {
    const movies = movieArray.map((movie) => {
      return {
        ...movie,
        isInFav: this.checkIfMovieIsInFavList(movie.id),
      };
    });
    props === "searchedMovies"
      ? this.setState({
          searchedFilterMovies: movies,
        })
      : this.setState({
          movies,
        });
  };

  deleteFromFavMovies = (movieId, movieType) => {
    const { movies, searchedFilterMovies, favMovies } = this.state;
    let moviesArray = movieType !== "searched" ? movies : searchedFilterMovies;
    const selectedMovie = favMovies.filter((movie) => movie.id !== movieId);

    if (moviesArray) {
      this.setState({
        favMovies: selectedMovie,
        movies: [...this.updateMovies(movieId)],
      });
    } else {
      this.setState({
        favMovies: selectedMovie,
        searchedFilterMovies: [...this.updateMovies(movieId, "searched")],
      });
    }
  };

  setFavMoviesToLocalStorage = () => {
    const { favMovies } = this.state;
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  };

  setPageNumberToLocalStorage = () => {
    const { pageNumber } = this.state;
    localStorage.setItem("pageNumber", JSON.stringify(pageNumber));
  };

  pageToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  toggleNavbar = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  changeOnFalse = () => {
    this.setState({
      isActive: false,
    });
  };

  handleSearchMoviesChange = (e) => {
    this.setState({
      searchMovies: e.target.value,
    });
  };

  handleSearchMoviesSubmit = (e) => {
    const { searchMovies } = this.state;
    e.preventDefault();
    this.setState({
      query: searchMovies,
    });
  };

  filterMoviesByName = () => {
    const { searchedFilterMovies } = this.state;
    return (
      <ListMovies
        moviesArray={searchedFilterMovies}
        listType={(listTypes.movies, listTypes.searchedMovies)}
        // className="favMovies"
      />
    );
  };

  handleSearchFavMovies = (e) => {
    this.setState({
      searchFavMovies: e.target.value,
    });
  };

  filterFavMoviesByName = () => {
    const { searchFavMovies, favMovies } = this.state;
    let tempFavMovies = [...favMovies];
    if (searchFavMovies.length !== 0) {
      tempFavMovies = tempFavMovies.filter(
        (movie) =>
          movie.title.toLowerCase().slice(0, searchFavMovies.length) ===
          searchFavMovies.toLowerCase()
      );
    }

    return (
      <ListMovies
        moviesArray={tempFavMovies}
        listType={listTypes.favMovies}
        className="search"
      />
    );
  };

  render() {
    const {
      movies,
      pageNumber,
      imgUrl,
      favMovies,
      isActive,
      searchFavMovies,
      searchMovies,
    } = this.state;
    return (
      <AppContext.Provider
        value={{
          movies,
          pageNumber,
          imgUrl,
          favMovies,
          isActive,
          searchFavMovies,
          searchMovies,
          increasePageNumber: this.increasePageNumber,
          decreasePageNumber: this.decreasePageNumber,
          addToFav: this.addToFav,
          deleteFromFavMovies: this.deleteFromFavMovies,
          checkIfMovieIsInFavList: this.checkIfMovieIsInFavList,
          toggleNavbar: this.toggleNavbar,
          changeOnFalse: this.changeOnFalse,
          handleSearchFavMovies: this.handleSearchFavMovies,
          filterFavMoviesByName: this.filterFavMoviesByName,
          handleSearchMoviesChange: this.handleSearchMoviesChange,
          filterMoviesByName: this.filterMoviesByName,
          handleSearchMoviesSubmit: this.handleSearchMoviesSubmit,
          handleSetQuery: this.handleSetQuery,
        }}
      >
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Wrapper>
            <Router />
          </Wrapper>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
