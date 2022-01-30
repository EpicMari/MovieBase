import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/Home/Home";
import FavMovies from "../views/FavMovies";
import Movies from "../views/Movies/Movies";
import SingleMovie from "../views/SingleMovie/SingleMovie";
import Header from "../components/Header/Header";
import NavBarTemplates from "../templates/NavBarTemplates";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBarTemplates>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.movies} component={Movies} />
          <Route path={routes.singleMovie} component={SingleMovie} />
          <Route path={routes.favMovies} component={FavMovies} />
        </Switch>
      </NavBarTemplates>
    </BrowserRouter>
  );
};

export default Router;
