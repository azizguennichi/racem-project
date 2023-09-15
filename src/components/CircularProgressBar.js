import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
const duration_bar = 10; // Set the constant duration in seconds
  const intervalDuration = 1000; // Set the interval to 1000ms (1 second)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const increment = (1 / duration_bar) * 100;
    const totalIntervals = duration_bar * 1000 / intervalDuration;
    let currentProgress = 0;

    const intervalId = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += increment;
        setProgress(currentProgress);
      } else {
        clearInterval(intervalId); // Stop the timer when progress reaches 100%
      }
    }, intervalDuration);

    return () => {
      clearInterval(intervalId); // Clean up the interval on unmount
    };
  }, []); // The empty dependency array ensures this effect runs once on component mount
  return (
    <div style={{ width: 65, height: 65 }}>
      <CircularProgressbar
        value={progress}
        text={`${Math.round(progress)}%`}
        styles={buildStyles({
         /*  pathColor: `rgba(62, 152, 199, ${progress / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7', */
          pathColor: '#3e98c7',
          textColor: '#000000',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
}

export default CircularProgressBar;
