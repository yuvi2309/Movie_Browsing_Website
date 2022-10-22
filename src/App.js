import React, { useState } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import VideoCard from "./VideoCard";
import "./App.css";

const API_KEY = "cee6eafd51620e5fae4e160b42c17fe5";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
// var dum;
const App = () => {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);
  const [isVideo, setVideo] = useState(0);
  const [isClicked, setCLicked] = useState(false);

  const handleCLick = () => {
    setCLicked(!isClicked);
  }

  const searchMovies = async () => {
    // console.log(searchTerm)
    if(searchTerm.length === 0) {
      setMovies((val)=>[]);
      return;
    }
    const response = await fetch(SEARCH_URL + `&query=${searchTerm}`);
    const data = await response.json();
    // console.log(data['results'])
    setMovies((val)=> [...data['results']])
  };

  const setVideoPlayer = (e) => {
    const MOVIE_ID = e.currentTarget.getAttribute('movie_id');
    setVideo(1);
    setMovieId(MOVIE_ID);
  }

  // const playMovie = async (e) => { 
  //   // console.log(e.currentTarget.getAttribute('movie_id'));
  //   const currTar = e.currentTarget;
  //   const parentDiv = currTar.parentElement;
  //   console.log(parentDiv)
  //   const MOVIE_ID = e.currentTarget.getAttribute('movie_id');
  //   // const VIDEO_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=en-US`
  //   const VIDEO_COMP = VideoCard(MOVIE_ID);
  //   console.log(VIDEO_COMP)
  //   parentDiv.insertBefore(VIDEO_COMP, currTar.nextSibling)
  //   // // const response = await fetch(VIDEO_URL)
  //   // VIDEO_COMP.play()
  // }

  return (
    <div className="app">
      
      <h1>MovieLand</h1>

      {/* FiL1_5DWV7Y */}
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          onKeyPress={(e) => e.key === 'Enter' && searchMovies()}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies()}
        />
      </div>
      {/* <iframe width="420" height="315"
      src="https://www.youtube.com/embed/FiL1_5DWV7Y">
      </iframe> */}
      {movies.length > 0 ? (
        <div className="container">
          {isVideo && <VideoCard MOVIE_ID={movieId} isClicked={isClicked} handleCLick={handleCLick}/>}
          {movies.map((movie, index) => (
            <div key={movie['id']} movie_id={movie['id']} onClick={setVideoPlayer}>
              <MovieCard movie={movie} isClicked={isClicked} handleCLick={handleCLick}/>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;


// <Popup trigger={<button> Click to open popup </button>} 
//      position="right center">
//       <div>GeeksforGeeks</div>
//       <button>Click here</button>
//     </Popup>