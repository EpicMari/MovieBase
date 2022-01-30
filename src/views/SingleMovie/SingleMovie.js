import React, { useContext } from "react";
import AppContext from "../../context";
import {
  Overview,
  ReleaseDate,
  StyledButton,
  StyledImg,
  Title,
  VoteAverage,
  Wrapper,
  ContentWrapper,
} from "./SingleMovie.styles";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { GiRoundStar } from "react-icons/gi";
import { listTypes } from "../../helpers/listType";

const SingleMovie = ({
  location: {
    state: { overview, image, title, release_date, vote_average, id, listType },
  },
}) => {
  const { addToFav, checkIfMovieIsInFavList } = useContext(AppContext);
  const isInFav = checkIfMovieIsInFavList(id);

  const renderMovieLikeOrDislikeBtn = () => (
    <StyledButton
      disabled={isInFav}
      onClick={() =>
        addToFav(id, listType === listTypes.searchedMovies && "searched")
      }
    >
      {isInFav ? <FcLike /> : <FcLikePlaceholder />}
    </StyledButton>
  );
  return (
    <Wrapper>
      <StyledImg src={image} alt={title} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
        <ReleaseDate>Release date: {release_date}</ReleaseDate>
        <VoteAverage>
          <GiRoundStar />
          <span>{vote_average} / 10</span>
        </VoteAverage>
        {renderMovieLikeOrDislikeBtn()}
      </ContentWrapper>
    </Wrapper>
  );
};

export default SingleMovie;
