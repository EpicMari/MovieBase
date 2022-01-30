import styled from "styled-components";

export const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0 20px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  height: 150px;
  width: 200px;
  border-radius: 10px 10px 10px 10px;
  background: ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
export const StyledImg = styled.img`
  height: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    height: 250px;
  }
  @media (min-width: ${({ theme }) => theme.devices.laptopL}) {
    height: 300px;
  }
`;
export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin: 10px 0 0 10px;
  flex-basis: 100%;
  color: ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
export const VoteAverage = styled.p`
  display: flex;
  flex-basis: 100%;
  margin: 10px 0 0 10px;
  color: ${({ theme }) => theme.colors.lightGrey};
  & svg {
    color: ${({ theme }) => theme.colors.gold};
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  & span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-left: 10px;
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    & span {
      font-size: ${({ theme }) => theme.fontSizes.s};
    }
  }
`;

export const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin: 10px 0 0 10px;
`;
