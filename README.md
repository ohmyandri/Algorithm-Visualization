# Sorting Algorithm Visualizer

Hi! This is a personal project I've been building to better understand how classic sorting algorithms actually work under the hood. I built it using React and vanilla CSS because I wanted to practice asynchronous logic and state management. 

## What it does

The application gives you visual feedback on how an array of random heights is sorted over time. It currently supports:

- Bubble Sort
- Insertion Sort
- Quick Sort
- Merge Sort

### Key Features
- **Speed & Size Controls**: Dynamically change the animation speed and the overall size of the array through a responsive sidebar.
- **Step-by-Step Execution**: Pause, resume, and manually step through the algorithm's execution frame by frame to deeply understand how it compares and swaps elements.
- **Drag-to-Resize (Custom Arrays)**: Before sorting begins, you can click and drag any bar up or down to manually adjust its value, allowing you to create custom scenarios (like reverse-sorted arrays).

The interface is completely mobile-friendly and handles interactions cleanly.

## Tech Stack

This project was built primarily with:
- React (via Vite)
- Standard CSS for everything (Flexbox, media queries, and animations)
- Custom Javascript asynchronous helpers using async/await to simulate the visual frames.