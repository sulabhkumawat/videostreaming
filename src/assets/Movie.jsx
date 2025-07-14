import React, { useRef } from 'react';
import film from './film.mp4';
import subtitles from './film.vtt'; // WebVTT subtitle file

const Movie = () => {
  const videoRef = useRef(null);

  const toggleSubtitles = () => {
    const video = videoRef.current;
    if (!video) return;

    const tracks = video.textTracks;
    if (tracks.length > 0) {
      const track = tracks[0]; // Assuming only one track
      track.mode = track.mode === 'showing' ? 'disabled' : 'showing';
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <video
        ref={videoRef}
        src={film}
        controls
        autoPlay
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      >
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src={subtitles}
          default
        />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleSubtitles}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          padding: '8px 16px',
          zIndex: 10,
          fontSize: '16px',
        }}
      >
        Toggle Subtitles
      </button>
      
    </div>
  );
};

export default Movie;
