import React, { useEffect, useState } from "react";
import CanvasComponent from "./CanvasComponent.jsx";
import SidebarApp from "../Sidebar/SidebarApp.jsx";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);

  const [arraySize, setArraySize] = useState(10);
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

  return (
    <>
      <SidebarApp
        sizeValue={arraySize}
        handleSizeChange={setArraySize}
        speedValue={animationSpeed}
        handleSpeedChange={setAnimationSpeed}
      />
      <CanvasComponent array={array}></CanvasComponent>
    </>
  );
}

//https://stackoverflow.com/questions/71327425/best-choice-for-javascript-random-number-generator
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
