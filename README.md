# Sorting Algorithm Visualizer

Hi! This is a personal project I've been building to better understand how classic sorting algorithms actually work under the hood. I built it using React and vanilla CSS because I wanted to practice asynchronous logic and state management. 

## What it does

The application gives you visual feedback on how an array of random heights is sorted over time. It currently supports:

- Bubble Sort
- Insertion Sort
- Quick Sort
- Merge Sort

You can control the animation speed and the overall size of the array through a responsive sidebar. The interface is completely mobile-friendly and handles interactions cleanly.

## Tech Stack

This project was built primarily with:
- React (via Vite)
- Standard CSS for everything (Flexbox, media queries, and animations)
- Custom Javascript asynchronous helpers using async/await to simulate the visual frames.

## What's next? (Roadmap)

To date, the project does exactly what it needs to visually, but the internal code structure has gotten a bit bloated. Right now, the main visualizer component handles way too much at once (generating random numbers, managing UI state, and running the sorting algorithms). 

My main priority moving forward is to perform a proper **Architectural Refactor** to follow cleaner programming conventions:
1. **Separation of Concerns:** Moving all the heavy logic and algorithm executions out of the visual components and into custom React Hooks.
2. **Modularizing CSS:** I plan to break my single global stylesheet into smaller, component-level CSS files so the code is easier to maintain.
3. Having a decoupled codebase will make it much easier to eventually build more complex features, such as an interactive "Step-by-step" mode.
