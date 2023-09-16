import React, { useState, useEffect } from "react";

function ProgressAll({ data, activeTestIndex,testFailed }) {
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

      // Check if there was a failed connection and set the progress for failed tests
      if (testFailed && test.result !== "pass") {
        
        return {
          completed: 100 / totalTests, // All tests marked as failed
          bgColor: "#FF0000", // Set background color to red for failed tests
          color: "#FF0000", // Set text color to red for failed tests
          
        };
      }

      return {
        completed: (index < activeTestIndex ? 100 : 0) / totalTests,
        bgColor,
        color,
      };
    });

    setSegments(progressSegments);

    // Calculate the overall progress percentage based on the activeTestIndex and data length
    const overallProgress = (activeTestIndex / totalTests) * 100;

    // Set the progress label one time
    if (testFailed) {
      setProgressLabel("100%");
    } else {
      setProgressLabel(`${Math.round(overallProgress)}%`);
    }
  }, [data, activeTestIndex,testFailed]);

  return (
    <div style={{ position: "relative" }}>
      {segments.map((segment, index) => (
        <div
          key={index}
          style={{
            width: `${segment.completed}%`,
            height: "30px",
            backgroundColor: segment.bgColor,
            color: segment.color,
            display: "inline-block",
            position: "relative",
          }}
        ></div>
      ))}
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
