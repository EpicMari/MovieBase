import React from "react";
import NavBar from "../components/NavBar/NavBar";

const NavBarTemplates = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default NavBarTemplates;
