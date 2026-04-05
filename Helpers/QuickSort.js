import { sleep } from "./sleepHelper.js";

// Main function called by the Visualizer (Name Fixed)
export const quickSort = async (array, speed) => {
    const bars = document.querySelectorAll(".arrayBar");
    await quickSortHelper(array, 0, array.length - 1, bars, speed);

    // Final verification sweep (Green cascade to celebrate)
    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
        await sleep(30 / speed);
    }
}

// Function with "Helper" surname to not crash with the global export
async function quickSortHelper(arr, low, high, bars, speed) {
    if (low >= high) return;

    // Await added because partition is now a sleepy async function
    let pi = await partition(arr, low, high, bars, speed);

    // Awaits and extra parameters added for valid recursion
    await quickSortHelper(arr, low, pi - 1, bars, speed);
    await quickSortHelper(arr, pi + 1, high, bars, speed);
}

async function partition(arr, low, high, bars, speed) {
    let pivot = arr[high];
    let i = low - 1;

    bars[high].style.backgroundColor = "yellow";

    for (let j = low; j <= high - 1; j++) {
        // Pinta de rojo la barra j que se va a comparar con el pivote
        bars[j].style.backgroundColor = "red";
        await sleep(100 / speed);

        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];

            // i ya es segura, la pintamos y actualizamos las alturas visuales
            bars[i].style.backgroundColor = "red";
            bars[i].style.height = `${(arr[i] / 1000) * 100}%`;
            bars[j].style.height = `${(arr[j] / 1000) * 100}%`;

            // Regresa 'i' a la normalidad
            bars[i].style.backgroundColor = "turquoise";
        }

        // Termina el turno de j, regrésala a turquesa
        bars[j].style.backgroundColor = "turquoise";
    }

    // Swap the pivot mathematically
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    await sleep(100 / speed);
    bars[i + 1].style.height = `${(arr[i + 1] / 1000) * 100}%`;
    bars[high].style.height = `${(arr[high] / 1000) * 100}%`;

    // Regresalo del color amarillo pivot a la normalidad
    bars[high].style.backgroundColor = "turquoise";

    return i + 1; // Return the partition index
}