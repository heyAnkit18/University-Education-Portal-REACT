import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({ playVideo, setPlayVideo }) => {
  const player = useRef(null);
  const closePlayVideo=(e)=>{
    if(e.target===player.current){
      setPlayVideo(false);

    }
  }
  return (
    <div className={`video-player ${playVideo ? '' : 'hide'}`} ref={player} onClick={closePlayVideo}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer