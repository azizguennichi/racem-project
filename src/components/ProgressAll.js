import React, { useState, useEffect } from "react";

function ProgressAll({ data, activeTestIndex }) {
  const [segments, setSegments] = useState([]);
  const [progressLabel, setProgressLabel] = useState("0%");

  useEffect(() => {
    // Calculate the total number of tests
    const totalTests = data.length;

    // Calculate the progress segments based on the test results
    const progressSegments = data.map((test, index) => {
      const color = test.result === "pass" ? "#00D328" : "#FF0000";
      const bgColor =
        test.result === "pass" || test.result === "fail" ? color : "inherit";
      return {
        completed: (index < activeTestIndex ? 100 : 0) / totalTests, // Update progress conditionally
        bgColor, // Set the background color conditionally
        color, // Add the text color based on test result
      };
    });

    setSegments(progressSegments);

    // Calculate the overall progress percentage based on the activeTestIndex and data length
    const overallProgress = (activeTestIndex / totalTests) * 100;
    
    // Set the progress label one time
    setProgressLabel(`${Math.round(overallProgress)}%`);
  }, [data, activeTestIndex]);

  return (
    <div style={{ position: "relative" }}>
      {segments.map((segment, index) => (
        <div
          key={index}
          style={{
            width: `${segment.completed}%`,
            height: "30px",
            backgroundColor: segment.bgColor,
            color: segment.color, // Set the text color based on test result
            display: "inline-block",
            position: "relative",
          }}
        >
          {/* No progress label here */}
        </div>
      ))}
      {/* Display the progress label outside of the loop */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {progressLabel}
      </div>
    </div>
  );
}

export default ProgressAll;

