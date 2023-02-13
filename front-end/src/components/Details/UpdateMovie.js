import React, { useState } from 'react';

const UpdateMovie = () => {
  const [searchType, setSearchType] = useState('id');
  const [searchValue, setSearchValue] = useState('');
  const [movie, setMovie] = useState(null);

  const handleSearch = () => {
    console.warn(searchType, searchValue, movie)
    const foundMovie = {
      id: 123,
      name: 'The Matrix',
      director: 'The Wachowskis',
      releaseDate: '1999-03-31',
    };

    setMovie(foundMovie);
  };

  const handleUpdate = (updatedMovie) => {
    setMovie(null);
  };

  return (
    <div className='add'>
      <h2>Update Movie</h2>
      <div>
        <input
          type="radio"
          id="search-by-id"
          value="id"
          checked={searchType === 'id'}
          onChange={() => setSearchType('id')}
        />
        <label htmlFor="search-by-id">Search by Movie Id</label>
        <br></br>
        <input
          type="radio"
          id="search-by-name"
          value="name"
          checked={searchType === 'name'}
          onChange={() => setSearchType('name')}
        />
        <label htmlFor="search-by-name">Search by Movie Name</label>
        <br></br>
        <input
          type={searchType === 'id' ? 'number' : 'text'}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <br></br>
        <button className='appButton' onClick={handleSearch}>Search</button>
      </div>
      {movie ? (
        <div>
          <div>
            <label>Movie Id:</label>
            <input type="number" value={movie.id} readOnly />
          </div>
          <div>
            <label>Movie Name:</label>
            <input type="text" value={movie.name} onChange={(event) => setMovie({ ...movie, name: event.target.value })} />
          </div>
          <div>
            <label>Director:</label>
            <input type="text" value={movie.director} onChange={(event) => setMovie({ ...movie, director: event.target.value })} />
          </div>
          <div>
            <label>Release Date:</label>
            <input type="date" value={movie.releaseDate} onChange={(event) => setMovie({ ...movie, releaseDate: event.target.value })} />
          </div>
          <button onClick={() => handleUpdate(movie)}>Update Movie</button>
        </div>
      ) : null}
    </div>
  );
};

export default UpdateMovie;

