import React, { useState, useEffect } from "react";

const Reports = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Rating</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {movies
          .sort((a, b) => b.rating - a.rating)
          .map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.rating}</td>
              <td>{movie.genre}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Reports;