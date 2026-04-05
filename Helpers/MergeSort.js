import { sleep } from "./sleepHelper.js";

// Main function called by the Visualizer
export const mergeSort = async (array, speed) => {
    const bars = document.querySelectorAll(".arrayBar");

    // Shadow array used to avoid creating multiple array references in memory
    const auxiliaryArray = array.slice();

    // Launch the recursive merge sort process
    await mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, bars, speed);

    // Final verification sweep (Green cascade to celebrate)
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
        await sleep(30 / speed);
    }
};

// Recursive function that divides the array into subarrays
const mergeSortHelper = async (mainArray, startIdx, endIdx, auxiliaryArray, bars, speed) => {
    if (startIdx === endIdx) return; // Base case: trivially sorted

    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    // Sort left half
    await mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, bars, speed);

    // Sort right half
    await mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, bars, speed);

    // Merge the sorted halves out-of-place and visualize the writes back to main array
    await doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, bars, speed);
};

// Performs the actual merge step and animates the DOM (Timo Bingmann approach)
const doMerge = async (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, bars, speed) => {
    let k = startIdx; // Index for the main array (the screen)
    let i = startIdx; // Pointer for the left subarray
    let j = middleIdx + 1; // Pointer for the right subarray

    // Compare elements from the shadow array and copy the smallest back to the main array
    while (i <= middleIdx && j <= endIdx) {

        // Highlight the elements being compared from the shadow array
        bars[i].style.backgroundColor = "red";
        bars[j].style.backgroundColor = "red";

        // Pause to appreciate the visualization
        await sleep(100 / speed);

        // Write back to the main array and visualize the overwrite immediately
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            mainArray[k] = auxiliaryArray[i];
            bars[k].style.height = `${(mainArray[k] / 1000) * 100}%`; // Direct DOM manipulation

            // Revert colors
            bars[i].style.backgroundColor = "turquoise";
            bars[j].style.backgroundColor = "turquoise";
            i++;
        } else {
            mainArray[k] = auxiliaryArray[j];
            bars[k].style.height = `${(mainArray[k] / 1000) * 100}%`; // Direct DOM manipulation

            // Revert colors
            bars[i].style.backgroundColor = "turquoise";
            bars[j].style.backgroundColor = "turquoise";
            j++;
        }
        k++;
    }

    // Hand-down the remaining elements in the left half (if any)
    while (i <= middleIdx) {
        bars[i].style.backgroundColor = "red";
        await sleep(100 / speed);
        mainArray[k] = auxiliaryArray[i];
        bars[k].style.height = `${(mainArray[k] / 1000) * 100}%`;
        bars[i].style.backgroundColor = "turquoise";
        i++;
        k++;
    }

    // Hand-down the remaining elements in the right half (if any)
    while (j <= endIdx) {
        bars[j].style.backgroundColor = "red";
        await sleep(100 / speed);
        mainArray[k] = auxiliaryArray[j];
        bars[k].style.height = `${(mainArray[k] / 1000) * 100}%`;
        bars[j].style.backgroundColor = "turquoise";
        j++;
        k++;
    }
};
