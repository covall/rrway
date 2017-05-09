import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%", height: 10, backgroundColor: "#AEAEAE" }} />
      <div
        style={{
          width: `${progress}%`,
          height: 10,
          backgroundColor: "green",
          position: "absolute",
          top: 0,
          transition: 'width 0.2s'
        }}
      />
    </div>
  );
};

export default ProgressBar;