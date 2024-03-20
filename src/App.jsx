import { ReactMediaRecorder } from "react-media-recorder";
import React, { useState } from 'react';

const App = () => {
  const [recordedVideo, setRecordedVideo] = useState(null);

  const handleRecordingStop = (mediaBlobUrl) => {
    setRecordedVideo(mediaBlobUrl);
  };

  return (
    <div>
      <ReactMediaRecorder
        screen
        render={({ status, startRecording, stopRecording }) => (
          <div className="action">
            <div className="btns">
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
            </div>
            {recordedVideo && (
              <div>
                <video src={recordedVideo} controls autoPlay loop />
                <a href={recordedVideo} download="recorded-video.mp4">Download Recorded Video</a>
              </div>
            )}
          </div>
        )}
        onStop={handleRecordingStop} // stopRecording tugmasi bosilgandan so'ng
      />
    </div>
  );
};

export default App;
