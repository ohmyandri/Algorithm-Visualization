import { sleep } from "./sleepHelper.js";

export const insertionSort = async (array, speed) => {
    const bars = document.querySelectorAll(".arrayBar");

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        //We paint the key
        bars[i].style.backgroundColor = "purple";
        await sleep(100 / speed);

        /* Move elements of array[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && array[j] > key) {
            //We paint the bars that are being compared
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            await sleep(100 / speed);

            // We make space for the key
            array[j + 1] = array[j];

            // We swap the bars in the screen
            bars[j + 1].style.height = `${(array[j] / 1000) * 100}%`;

            // Back to original color
            bars[j].style.backgroundColor = "turquoise";
            bars[j + 1].style.backgroundColor = "turquoise";

            // We move to the previous element
            j = j - 1;
        }

        // We put the key in the correct position
        array[j + 1] = key;
        bars[j + 1].style.height = `${(key / 1000) * 100}%`;

        // Back to original color
        bars[i].style.backgroundColor = "turquoise";
        bars[j + 1].style.backgroundColor = "turquoise";
    }

    // Final verification sweep
    for (let k = 0; k < bars.length; k++) {
        bars[k].style.backgroundColor = "green";
        await sleep(50 / speed);
    }
}