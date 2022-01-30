import React from "react";
import { routes } from "../../routes";
import { Link, Logo, Title, Wrapper } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Link to={routes.home}>
        <Logo />
        <Title>MovieBase</Title>
      </Link>
    </Wrapper>
  );
};

export default Header;
