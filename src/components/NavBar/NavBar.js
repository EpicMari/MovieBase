import React, { useContext } from "react";
import AppContext from "../../context";
import { routes } from "../../routes";
import {
  ButtonNav,
  NavIcon,
  StyledList,
  StyledListItem,
  StyledNavLink,
  Wrapper,
} from "./NavBar.styles";

const NavBar = () => {
  const { toggleNavbar, isActive, changeOnFalse } = useContext(AppContext);
  return (
    <Wrapper className={isActive ? "active" : null}>
      <ButtonNav onClick={toggleNavbar}>
        <NavIcon></NavIcon>
      </ButtonNav>
      <StyledList>
        <StyledNavLink
          exact
          to={routes.home}
          onClick={changeOnFalse}
          activeClassName="active"
        >
          <StyledListItem>Home</StyledListItem>
        </StyledNavLink>
        <StyledNavLink
          to={routes.movies}
          onClick={changeOnFalse}
          activeClassName="active"
        >
          <StyledListItem>Movies</StyledListItem>
        </StyledNavLink>
        <StyledNavLink
          to={routes.favMovies}
          onClick={changeOnFalse}
          activeClassName="active"
        >
          <StyledListItem>Favorites</StyledListItem>
        </StyledNavLink>
      </StyledList>
    </Wrapper>
  );
};

export default NavBar;
