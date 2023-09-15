import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function ProgressBarLineFaild() {
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
    <>
      <ProgressBar
        completed={progress}
        bgColor="red"
        height="30px"
        borderRadius="4px"
        labelColor="#ffffff"
        labelSize="18px"
      />

    </>
  );
}

export default ProgressBarLineFaild;

