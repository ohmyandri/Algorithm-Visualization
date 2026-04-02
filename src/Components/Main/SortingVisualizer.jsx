import { useEffect, useState } from "react";
import CanvasComponent from "./CanvasComponent.jsx";
import SidebarApp from "../Sidebar/SidebarApp.jsx";
import { bubbleSort } from "../../../Helpers/BubbleSort.js";
import { insertionSort } from "../../../Helpers/InsertionSort.js";

export default function SortingVisualizer() {
  //UseState to make it easier deactivate buttons when algorithm is running
  const [isRunning, setIsRunning] = useState(false);

  //Array of the numbers to be sorted
  const [array, setArray] = useState([]);

  //Algorithm selected
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  //Size of the array using state
  const [arraySize, setArraySize] = useState(10);

  //Speed of the animation using state
  const [animationSpeed, setAnimationSpeed] = useState(1);

  function resetArray() {
    const array = [];

    //Generate random numbers
    for (let i = 0; i < arraySize; i++) {
      array.push(randomInt(10, 1000));
    }

    //Update the array color
    const bars = document.querySelectorAll(".arrayBar");
    bars.forEach((bar) => {
      bar.style.backgroundColor = "turquoise";
    });

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
    setAlgorithm: setSelectedAlgorithm,
    runningState: isRunning,
    setRunningState: setIsRunning
  };

  async function runAlgorithm() {
    //We set the is running to true, so the user cannot interact with the UI
    setIsRunning(true);

    //We call the algorithm selected
    switch (controls.algorithm) {
      case "Bubble Sort":
        await bubbleSort(array, animationSpeed);
        break;

      case "Insertion Sort":
        await insertionSort(array, animationSpeed);
        break;

      default:
        alert("Please select an algorithm first.");
        break;
    }

    //We set the is running to false
    setIsRunning(false);
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
