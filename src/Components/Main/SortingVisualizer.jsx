import React, { useEffect, useState } from "react";
import CanvasComponent from "./CanvasComponent.jsx";
import SidebarApp from "../Sidebar/SidebarApp.jsx";

export default function SortingVisualizer() {
  //Array of the numbers to be sorted
  const [array, setArray] = useState([]);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  //Size of the array using state
  const [arraySize, setArraySize] = useState(10);
  //Speed of the animation using state
  const [animationSpeed, setAnimationSpeed] = useState(2);

  function resetArray() {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(randomInt(10, 1000));
    }
    setArray(array);
  }

  useEffect(() => {
    resetArray();
  }, [arraySize]);

  const controls = {
    size: arraySize,
    setSize: setArraySize,
    speed: animationSpeed,
    setSpeed: setAnimationSpeed,
    algorithm: selectedAlgorithm,
    setAlgorithm: setSelectedAlgorithm
  };

  function runAlgorithm() {
    if (controls.algorithm === "") {
      alert("Please select an algorithm first.");
      return;
    }
    else {
      console.log("Array size: %s, Speed: %s, Algorithm: %s", controls.size, controls.speed, controls.algorithm);
    }
    // Aquí irá la ejecución real más adelante...
  }

  return (
    <>
      <SidebarApp
        controls={controls}
        resetArray={resetArray}
        runAlgorithm={runAlgorithm}
      />
      <CanvasComponent array={array}></CanvasComponent>
    </>
  );
}

//https://stackoverflow.com/questions/71327425/best-choice-for-javascript-random-number-generator
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
