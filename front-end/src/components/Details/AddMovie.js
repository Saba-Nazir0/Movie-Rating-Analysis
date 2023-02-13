import React, { useState } from 'react';

const genres = ['Comedy','Romance','Horror','Action','Drama','Thriller','Animation','Sci-Fi',
'Adventure','Fantasy',];

const AddMovie = () => {
  const [movieName, setMovieName] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit =()=> {
    console.warn(movieName, selectedGenre, errorMessage)
    const movieExists = false;
    if (movieExists) {
      setErrorMessage('This movie already exists');
    } else {
      setMovieName('');
      setSelectedGenre(genres[0]);
      setErrorMessage('');
    }
  };

  return (
    <div className='add'>
      <h1>Add a Movie</h1>
      <h3>Enter Movie Name:</h3>
      <input className="inputAdd" type="text" placeholder="Enter Movie Name" value={movieName}
    onChange={(e) => setMovieName(e.target.value)} />
      <h3>Genre:</h3>
      <select class="inputAdd" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <button className="appButton" onClick={handleSubmit}>Submit</button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default AddMovie;