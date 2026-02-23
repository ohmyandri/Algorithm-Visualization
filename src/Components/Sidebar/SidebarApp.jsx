import React from "react";
import SidebarHeader from "./SidebarHeader.jsx";
import SidebarAlgorithms from "./SidebarAlgorithms.jsx";
import SidebarParameters from "./SidebarParameters.jsx";

function SidebarApp({sizeValue, handleSizeChange, speedValue, handleSpeedChange}) {
  return (
    <form className="sidebarComponent">
      <section>
        <SidebarHeader></SidebarHeader>

        <div className="sidebarAlgorithms">
          <h4>
            <span className="material-symbols-outlined">memory</span>
            <p>ALGORITHMS</p>
          </h4>

          <SidebarAlgorithms value="Insertion Sort"></SidebarAlgorithms>
          <SidebarAlgorithms value="Bubble Sort"></SidebarAlgorithms>
          <SidebarAlgorithms value="Insertion Sort"></SidebarAlgorithms>
          <SidebarAlgorithms value="Merge Sort"></SidebarAlgorithms>
          <SidebarAlgorithms value="Quick Sort"></SidebarAlgorithms>
          <SidebarAlgorithms value="Radix Sort"></SidebarAlgorithms>
        </div>

        {/* Array Size */}
        <SidebarParameters
          sliderValue={sizeValue}
          label={"Array Size"}
          minValue={10}
          maxValue={100}
          step={10}
          handleChange = {handleSizeChange} 
          ></SidebarParameters>

        {/* Speed of the animations */}
        <SidebarParameters
          label={"Animation Speed"}
          minValue={1}
          maxValue={5}
          step={1}
          sliderValue={speedValue}
          handleChange = {handleSpeedChange} 
        ></SidebarParameters>
      </section>
    </form>
  );
}

export default SidebarApp;
