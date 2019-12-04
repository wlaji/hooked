import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

function App() {
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios.post(MOVIE_API_URL).then(res => {
      console.log(res)
      // setMovies(res.Search);
      // setLoading(false);
    })
  },[])

  const search = searchValue => {
    // setLoading(true);
    // setErrorMessage(null);
    axios.post(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(res => {
      console.log(res)
      // if (res.Response === "True") {
      //   setMovies(res.Search);
      //   setLoading(false);
      // } else {
      //   setErrorMessage(res.Error);
      //   setLoading(false);
      // }
    })
  }

  return (
    <div className="App">
      <Header text="HOOKED" />
      {/* <Search search={search} />
      <p className="app-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie,index)=>{
            return (
              <Movie key={`${index}-${movie.Title}`} movie={movie}/>
            )
          })
        )}
      </div> */}
    </div>
  );
}

export default App;
