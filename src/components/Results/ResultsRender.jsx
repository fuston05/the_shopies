// ** RESULTS JSX FILE **
import React from "react";

export const ResultsRender = ({
  searchTerm,
  nominations,
  movies,
  nominate,
}) => {
  return (
    <div className="movieCard">
      <h3>{`Results for '${searchTerm || '...'} `}'</h3>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="movieCard">
              <span className= 'movieInfo'>{movie.Title}</span>
              <span className= 'movieInfo'>{movie.Year}</span>
              <span className= 'nominateBtn'>
                {/* disable btn if already nominated */}
                {/* -or- if you have 5 nominations */}
                {(nominations && nominations.includes(movie)) ||
                nominations.length === 5 ? (
                  <button
                    disabled
                    onClick={() => {
                      nominate(movie);
                    }}
                  >
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
