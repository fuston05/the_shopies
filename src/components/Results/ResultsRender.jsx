// ** RESULTS JSX FILE **
import React from "react";

export const ResultsRender = ({ nominations, movies, nominate }) => {

  return (
    <div className="movieCard">
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="movieCard">
              <span>{movie.Title}</span>
              <span>{movie.Year}</span>
              <span>
                {/* disable btn if already nominated */}
                {/* -or- if you have 5 nominations */}
                {(nominations && nominations.includes(movie)) || nominations.length === 5 ? (
                  <button disabled onClick={() => {nominate(movie)}}>
                    Nominate
                  </button>
                ) : (
                  <button onClick={() => nominate(movie)}>Nominate</button>
                )}
              </span>
            </div>
          );
        })}
    </div>
  );
};
