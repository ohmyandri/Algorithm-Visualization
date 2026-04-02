import React from "react";

export default function SidebarActions({ resetArrayOnClick, runAlgorithmOnClick }) {
  return (
    <div className="sidebarFooter">
      {/* Run algorithm */}
      <button type="button" className="actionBtn runAlgorithmBtn" onClick={runAlgorithmOnClick}>
        <span className="material-symbols-outlined">play_arrow</span>
        <span>Run Algorithm</span>
      </button>

      {/* Step by step and reset */}
      <div className="proccessBtns">
        <button type="button" className="actionBtn stepByStepAlgoBtn">
          <span className="material-symbols-outlined">play_pause</span>
          <span>Step</span>
        </button>

        <button
          type="button"
          className="actionBtn resetArrayBtn"
          onClick={resetArrayOnClick}
        >
          <span>P </span>
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
