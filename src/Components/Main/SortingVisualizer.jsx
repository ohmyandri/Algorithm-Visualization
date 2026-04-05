import { useState } from "react";
import CanvasComponent from "./CanvasComponent.jsx";
import SidebarApp from "../Sidebar/SidebarApp.jsx";
import { useAlgorithmEngine } from "../../hooks/useAlgorithmEngine.js";
import "./SortingVisualizer.css";

export default function SortingVisualizer() {
  //Extracting all the mathematical logic from our custom hook (Domain Logic)
  const {
    array,
    controls,
    isRunning,
    resetArray,
    runAlgorithm
  } = useAlgorithmEngine();

  //Specific rendering states dedicated purely to the Visual Layer (UI Presentation)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isErrorShaking, setIsErrorShaking] = useState(false);

  const handleRunAlgorithm = async () => {
    setIsSidebarOpen(false);
    await runAlgorithm();
  };

  return (
    <>
      {!isSidebarOpen && (
        <button
          className={`floatingSettingsBtn ${isErrorShaking ? "shakeError" : ""} ${isRunning ? "locked" : ""}`}
          onClick={() => {
            if (isRunning) {
              //Triggers the purely visual error vibration
              setIsErrorShaking(true);
              setTimeout(() => setIsErrorShaking(false), 400); //Turns off CSS animation in 400ms
            } else {
              setIsSidebarOpen(true);
            }
          }}
          title={isRunning ? "Locked during execution" : "Open Settings"}
        >

          <span className="material-symbols-outlined">settings</span>
        </button>
      )}

      {/*Dark backdrop that covers the canvas and catches the click to close*/}
      {isSidebarOpen && (
        <div
          className="sidebarBackdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/*Animated Wrapper for the Sidebar*/}
      <div className={`sidebarWrapper ${isSidebarOpen ? "open" : "closed"}`}>
        <SidebarApp
          controls={controls}
          resetArray={resetArray}
          runAlgorithm={handleRunAlgorithm}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      </div>

      <CanvasComponent array={array}></CanvasComponent>
    </>
  );
}
