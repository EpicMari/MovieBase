import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px auto 20px;
  padding: 0 20px;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    margin: 70px 0 20px 200px;
  }
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    flex-direction: row;
    align-items: center;
  }
`;
export const StyledImg = styled.img`
  border-radius: 5px 5px 5px 5px;
  width: 300px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    border-radius: 0 10px 10px 0;
    width: 400px;
    align-items: center;
  }
`;
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 20px;
  flex-basis: 100%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
export const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 20px;
  width: 80%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const ReleaseDate = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 20px;
  width: 80%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
export const VoteAverage = styled.p`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 20px;
  flex-basis: 100%;
  text-align: center;
  & svg {
    color: ${({ theme }) => theme.colors.gold};
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
  & span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    align-self: center;
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
  margin: 20px 0;
`;
