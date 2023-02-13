import React, { useState } from 'react';

const Rating = () => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState(['Movie 1', 'Movie 2', 'Movie 3']);

  const handleMovieChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSave = () => {
    console.log(`Saving movie: ${selectedMovie} with rating: ${rating}`);
  };

  return (
    <div className='adduser'>
      <select className='inputBox' value={selectedMovie} onChange={handleMovieChange}>
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
      <input
      className='inputBox'
        type="number"
        value={rating}
        onChange={handleRatingChange}
        min="0"
        max="10"
      />
      <button className='appButton' onClick={handleSave}>Save</button>
    </div>
  );
};

export default Rating;