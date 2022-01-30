import styled from "styled-components";
import { SiThemoviedatabase } from "react-icons/si";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    margin-left: 200px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Logo = styled(SiThemoviedatabase)`
  font-size: 35px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.black};
`;
export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.black};
`;
