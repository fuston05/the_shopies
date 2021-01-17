// ** RESULTS LOGIC FILE **
import React, { useState, useEffect } from "react";
import { ResultsRender } from "./ResultsRender";
// api
import { fetchData } from "../../api";

export const ResultsContainer = ({searchTerm, nominate, nominations }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData(searchTerm)
      .then((res) => {
        console.log('res: ', res);
        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [searchTerm]);

  return (
    <section className="resultsCont">
      <ResultsRender searchTerm={searchTerm} nominations={nominations} nominate= {nominate} movies={movies} />
    </section>
  );
};
