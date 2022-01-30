import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { listTypes } from "../../helpers/listType";
import {
  StyledImg,
  Title,
  MovieWrapper,
  ContentWrapper,
  VoteAverage,
  StyledButton,
} from "./Movie.styles";
import { FcLikePlaceholder, FcLike, FcDislike } from "react-icons/fc";
import { GiRoundStar } from "react-icons/gi";

const Movie = ({
  title,
  poster_path,
  vote_average,
  overview,
  release_date,
  id,
  isInFav,
  listType,
}) => {
  const { imgUrl, addToFav, deleteFromFavMovies } = useContext(AppContext);

  const renderMovieRedirectImg = () => (
    <Link
      to={{
        pathname: `/movie/${title.replace(/\s/g, "")}`,
        state: {
          overview,
          image: `${imgUrl}${poster_path}`,
          title,
          release_date,
          vote_average,
          id,
          isInFav,
        },
      }}
    >
      <StyledImg src={`${imgUrl}${poster_path}`} alt={title} />
    </Link>
  );

  const renderMovieContent = () => (
    <ContentWrapper>
      <Title>{title}</Title>
      <VoteAverage>
        <GiRoundStar />
        <span>{vote_average} / 10</span>
      </VoteAverage>
      {renderMovieLikeOrDislikeBtn()}
    </ContentWrapper>
  );

  const renderMovieLikeOrDislikeBtn = () => (
    <>
      {listType === listTypes.favMovies ? (
        <StyledButton
          onClick={() =>
            deleteFromFavMovies(id, listTypes.searchedMovies && "searched")
          }
        >
          <FcDislike />
        </StyledButton>
      ) : (
        <StyledButton
          disabled={isInFav}
          onClick={() =>
            addToFav(id, listType === listTypes.searchedMovies && "searched")
          }
        >
          {isInFav ? <FcLike /> : <FcLikePlaceholder />}
        </StyledButton>
      )}
    </>
  );

  return (
    <MovieWrapper>
      {renderMovieRedirectImg()}
      {renderMovieContent()}
    </MovieWrapper>
  );
};

export default Movie;
