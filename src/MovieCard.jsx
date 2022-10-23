import React from 'react';
import { useState } from 'react';
const API_KEY = "cee6eafd51620e5fae4e160b42c17fe5";

const MovieCard = (movie, isClicked, handleClick) => {
  const desc = () => {
    const overview = movie.movie['overview']
    const maxlen = 100;
    if(overview.length>maxlen){
      return <p>{overview.substring(0,maxlen) + '...'}</p>
    }else{
      return <p>{overview}</p>
    }
  };

  // const playvid = (e) =>{
  //   const videlm = document.getElementsByTagName('video');
  //   videlm.play()
  // }

  // return (
  //   <div className="movie">
      // <div>
      //   {movie.movie['release_date']}
      // </div>

  //     <div>
  //       <img src={`https://image.tmdb.org/t/p/w500/${movie.movie['poster_path']}`} alt={movie.movie['id']} />
  //     </div>
  //     {/* <div>
  //       <video onMouseOver={playvid()}>
  //         <source src={`https://api.themoviedb.org/3/movie/${movie.movie['id']}/videos?api_key=${API_KEY}&language=en-US`}/>
  //       </video>
  //     </div> */}

  //     <div>
  //       {/* <span>iron</span> */}
  //       <h3>{movie.movie['title']}</h3>
  //       {/* <p>{movie.movie['overview']}</p> */}
  //       {desc()}
  //     </div>
  //   </div>
  // );

  return(
    <div class="wrapper">
        <div class="card">
          <div>
            {movie.movie['release_date']}
          </div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.movie['poster_path']}`} alt={movie.movie['id']} />

          <div class="descriptions">
              <h1>{movie.movie['title']}</h1>
              <p>{movie.movie['overview']}</p>
          </div>
        </div>
    </div>
  );
}

export default MovieCard;

{/* <div class="wrapper">
        <div class="card">
            <img src="">
            <div class="descriptions">
                <h1>Equalizer 2</h1>
                <p>
                    If you have a problem and there is im.                </p>
                <button>
                    <i class="fab fa-youtube"></i>
                    Play trailer on YouTube
                </button>
            </div>
        </div>
    </div> */}
