import { useState, useEffect } from "react";
import { bubbleSort } from "../utils/algorithms/BubbleSort.js";
import { insertionSort } from "../utils/algorithms/InsertionSort.js";
import { mergeSort } from "../utils/algorithms/MergeSort.js";
import { quickSort } from "../utils/algorithms/QuickSort.js";

//Pure mathematical utility functions
//https://stackoverflow.com/questions/71327425/best-choice-for-javascript-random-number-generator
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Custom Hook: useAlgorithmEngine
 * Encapsulates all state and mathematical logic of the algorithms.
 * External UI components only consume it, keeping the visuals clean and isolated.
 */
export function useAlgorithmEngine() {
  //Business abstract states
  const [isRunning, setIsRunning] = useState(false);
  const [array, setArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [arraySize, setArraySize] = useState(10);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  //Pure Logic Functions
  function resetArray() {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
        newArray.push(randomInt(10, 1000));
    }
    const bars = document.querySelectorAll(".arrayBar");
    bars.forEach((bar) => {
        bar.style.backgroundColor = "turquoise";
    });
    setArray(newArray);
  }

  //Effect to recalculate when the selected size changes
  useEffect(() => {
    resetArray();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arraySize]);

  //Unified controls packed so UI components can send them easily as Props
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

  //Modular Executors
  async function runAlgorithm() {
    setIsRunning(true);

    switch (controls.algorithm) {
      case "Bubble Sort":
        await bubbleSort(array, animationSpeed);
        break;
      case "Insertion Sort":
        await insertionSort(array, animationSpeed);
        break;
      case "Quick Sort":
        await quickSort(array, animationSpeed);
        break;
      case "Merge Sort":
        await mergeSort(array, animationSpeed);
        break;
      default:
        alert("Please select an algorithm first.");
        break;
    }

    setIsRunning(false);
  }

  //Output: The only thing the visual interface can touch to connect to its gears
  return {
    array,
    controls,
    isRunning,
    resetArray,
    runAlgorithm
  };
}
