import React, { useState, useEffect } from "react";

function ProgressBarLine({ souTests, activeSousIndex, sousFailed }) {
  const [segments, setSegments] = useState([]);
  const [progressLabel, setProgressLabel] = useState("0%");
  const [labelPosition, setLabelPosition] = useState(0);

  useEffect(() => {
    const totalTests = souTests.length ;
    const progressSegments = souTests.map((test, index) => {
      const color = test.etat === "pass" ? "#00D328" : "#FF0000";
      const bgColor = test.etat === "pass" || test.etat === "fail" ? color : "inherit";

      if (sousFailed && test.etat !== "pass") {
        return {
          completed: 100 / totalTests,
          bgColor: "#FF0000",
          color: "#FF0000",
        };
      }

      // Calculate the progress based on activeSousIndex
      const completed = (index < activeSousIndex ? 100 : 0) / totalTests;

      return {
        completed,
        bgColor,
        color,
      };
    });

    setSegments(progressSegments);

    const overallProgress = (activeSousIndex / totalTests) * 100;

    setProgressLabel(sousFailed ? "100%" : `${Math.round(overallProgress)}%`);

    // Set labelPosition based on activeSousIndex
    setLabelPosition((activeSousIndex / totalTests) * 100);
  }, [souTests, activeSousIndex, sousFailed]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
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
            transition: "width 3s",
          }}
        ></div>
      ))}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: `${labelPosition}%`,
          transform: "translate(-110%, -50%)",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "18px",
          transition: "left 3s",
        }}
      >
        {progressLabel}
      </div>
    </div>
  );
}

export default ProgressBarLine;
