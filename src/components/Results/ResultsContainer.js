// ** RESULTS LOGIC FILE **
import React, { useState, useEffect } from "react";
import { ResultsRender } from "./ResultsRender";
// api
import { fetchData } from "../api";

export const ResultsContainer = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData(searchTerm)
      .then((res) => {
        setMovies(res.data.Search);
        console.log("res: ", res.data);
        console.log("totalResults: ", res.data.totalResults);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [searchTerm]);

  return (
    <div className="resultsCont">
      <ResultsRender movies={movies} />
    </div>
  );
};