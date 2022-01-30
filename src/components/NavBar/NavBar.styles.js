import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.grey};
  left: -100%;
  transition: 0.4s;

  &.active {
    left: 0;
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    left: 0;
    width: 200px;
  }
`;
export const ButtonNav = styled.button`
  position: fixed;
  top: 17.5px;
  left: 10px;
  margin-left: 15px;
  padding: 10px 10px;
  border: none;
  background: none;
  transition: 0.4s;

  ${Wrapper}.active & {
    left: calc(100% - 52px);
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    display: none;
  }
`;
export const NavIcon = styled.span`
  position: absolute;
  width: 40px;
  height: 4px;
  background: ${({ theme }) => theme.colors.grey};
  transform: translate(-50%, -50%);
  transition: background-color 0.1s 0.1s ease-in-out;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    background: ${({ theme }) => theme.colors.grey};
    left: 0;
    transform: translateX(-50%);
    transition: transform background-color 0.4s 0.4s ease-in-out;
  }

  &::after {
    transform: translateY(-10px);
  }
  &::before {
    transform: translateY(10px);
  }

  ${Wrapper}.active & {
    background-color: transparent;
  }

  ${Wrapper}.active &::after {
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  ${Wrapper}.active &::before {
    transform: rotate(-45deg);
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledNavLink = styled(NavLink)``;
export const StyledList = styled.ul`
  text-align: center;
  display: none;
  ${Wrapper}.active & {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    display: block;
    margin-top: 110px;
  }
`;

export const StyledListItem = styled.li`
  padding: 20px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    transition: color 0.5s linear, background-color 0.5s linear;
  }

  ${StyledNavLink}.active & {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
