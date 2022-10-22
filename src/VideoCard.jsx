import { useEffect } from "react";
import {React, useState} from "react";
const API_KEY = "cee6eafd51620e5fae4e160b42c17fe5";

const VideoCard = (MOVIE_ID, isClicked, handleClick) => {
    const [video_code, setcode] = useState(0);

    useEffect(()=>{
        const videoinfo = async () =>{
            const VIDEO_URL = `https://api.themoviedb.org/3/movie/${MOVIE_ID.MOVIE_ID}/videos?api_key=${API_KEY}&language=en-US`;
            const resp = await fetch(VIDEO_URL)
            const data = await resp.json()
            const video_code = data['results'][0]['key']
            setcode(video_code)  
        }
        videoinfo()
    },[MOVIE_ID])

    return (
            <div className={isClicked ? "VideoDiv VideoDiv-active" : "VideoDiv"}>
                <button type="button" onClick={handleClick}>Close</button>
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video_code}`}></iframe>
            </div>

    );

}
export default VideoCard;