import React from "react";

export default function SidebarActions({ resetArrayOnClick, runAlgorithmOnClick, controls }) {
  const { runningState, isPaused, pause, resume, step } = controls || {};

  return (
    <div className="sidebarFooter">
      {/* Run / Pause / Resume algorithm */}
      {!runningState ? (
        <button type="button" className="actionBtn runAlgorithmBtn" onClick={runAlgorithmOnClick}>
          <span className="material-symbols-outlined">play_arrow</span>
          <span>Run Algorithm</span>
        </button>
      ) : isPaused ? (
        <button type="button" className="actionBtn runAlgorithmBtn" onClick={resume} style={{ backgroundColor: "#4CAF50" }}>
          <span className="material-symbols-outlined">play_arrow</span>
          <span>Resume</span>
        </button>
      ) : (
        <button type="button" className="actionBtn runAlgorithmBtn" onClick={pause} style={{ backgroundColor: "#FF9800" }}>
          <span className="material-symbols-outlined">pause</span>
          <span>Pause</span>
        </button>
      )}

      {/* Step by step and reset */}
      <div className="proccessBtns">
        <button 
          type="button" 
          className="actionBtn stepByStepAlgoBtn" 
          onClick={() => {
            if (!runningState) {
              runAlgorithmOnClick(true);
            } else {
              if (!isPaused) {
                pause();
              }
              step();
            }
          }}
          title={!runningState ? "Start step-by-step" : "Next Step"}
        >
          <span className="material-symbols-outlined">skip_next</span>
          <span>Step</span>
        </button>

        <button
          type="button"
          className="actionBtn resetArrayBtn"
          onClick={resetArrayOnClick}
        >
          <span className="material-symbols-outlined">refresh</span>
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
