import React from "react";
import styled from "styled-components";
import "../App.scss";

const MovieList = ({ movies, nominateAction, clickAction }) => {
  const NominateAction = nominateAction;

  return (
    <>
      {movies ? (
        movies.map((movie) => {
          return (
            <>
              <div key={movie.imdbID} className="movie-container">
                <PosterContainer>
                  <Poster src={movie?.Poster} alt="movie" />
                  <Interaction onClick={() => clickAction(movie)}>
                    <NominateAction />
                  </Interaction>
                </PosterContainer>
                <div className="description">
                  <p>
                    {movie.Title} <span>({movie.Year})</span>
                  </p>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieList;

const PosterContainer = styled.div`
  display: flex;
  transition: transform 0.5s;
  background-color: transparent;
  position: relative;
  height: 15rem;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
    opacity: 1;
    overflow: visible;
  }
`;

const Poster = styled.img`
  border-radius: 8px;
  min-height: 100%;
  min-width: 100%;
`;

const Interaction = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  text-align: center;
  padding: 0.5rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  will-change: transform;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
