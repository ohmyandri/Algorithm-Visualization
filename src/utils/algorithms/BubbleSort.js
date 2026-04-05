import { sleep } from "./sleepHelper.js";

export const bubbleSort = async (array, speed) => {
    const bars = document.querySelectorAll(".arrayBar");

    for (var i = 0; i < array.length; i++) {
        // Start the j loop
        for (var j = 0; j < (array.length - i - 1); j++) {
            // Red color to the bars that are being compared
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";

            // Time stop so the user can appreciate what is happening
            await sleep(100 / speed);

            // Evaluate who is greater mathematically
            if (array[j] > array[j + 1]) {
                // Swap them
                var temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp

                // Swap their height in the screen
                bars[j].style.height = `${(array[j] / 1000) * 100}%`;
                bars[j + 1].style.height = `${(array[j + 1] / 1000) * 100}%`;
            }

            // Return to original color
            bars[j].style.backgroundColor = "turquoise";
            bars[j + 1].style.backgroundColor = "turquoise";

        }
        // Color the last element, already in the right place, in green
        bars[array.length - i - 1].style.backgroundColor = "green";
    }
};
