import styled from "styled-components";
import { listTypes } from "../../helpers/listType";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: ${({ listType }) =>
    listType === listTypes.favMovies ? "0px" : "80px"};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    margin: ${({ listType }) =>
      listType === listTypes.searchedMovies ? "0" : "0 0 0 200px"};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
