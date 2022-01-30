import styled from "styled-components";

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    margin: 0 0 0 200px;
  }
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.lightGrey};
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: inset 0 0 0 0.5px ${({ theme }) => theme.colors.white};
  transition: color 0.5s linear, background-color 0.5s linear;
  text-transform: uppercase;

  &:hover,
  &.firstPage {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
