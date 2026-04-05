# Algorithm Visualization Tool 📊

An interactive web visualization tool designed to help developers and students understand how classic sorting algorithms work under the hood. Built with React, this tool allows users to control animation speeds, dynamically resize datasets, and visualize real-time DOM manipulations.

## Features ✨

- **Real-time Animations:** Watch arrays get sorted frame-by-frame with dynamic color highlighting for pivots, comparisons, and sorted areas.
- **Interactive Configurations:** A smooth, responsive settings sidebar allows you to tweak array sizes and algorithm speeds on the fly.
- **Multiple Algorithms Supported:**
  - 🫧 **Bubble Sort**
  - 🎯 **Insertion Sort**
  - ⚡ **Quick Sort** (Lomuto Partition implementation)
  - 🔀 **Merge Sort** (Out-of-place shadow arrays)
- **Responsive & Mobile Ready:** Features floating interactive buttons, CSS modal transitions, and adaptive layouts for any screen.

## Tech Stack 🛠️

- **Library:** React (Vite)
- **Styling:** Vanilla CSS (Flexbox, conditional media queries, glassmorphism)
- **Animation Engine:** Custom `async/await` JavaScript sleep controllers manipulating the DOM directly for optimal performance.

## Future Roadmap & Next Steps 🚀

This personal project started as a raw logical challenge to execute and display mathematical sorting over the DOM. 

The **next immediate step** in this project's evolution is a massive **Architectural Refactor** to align with Clean Code and Senior scalability standards. As the app has grown, the core component has started accumulating too many responsibilities (The "God Component" anti-pattern). 

The upcoming goals to restructure the software architecture are:
1. **Extraction of Domain Logic:** Isolate mathematical procedures, array generation, and async states into pure, abstract Custom Hooks (e.g., `useAlgorithmEngine`).
2. **CSS Modularization:** Dismantle the monolithic global stylesheet into component-scoped `.css` modules to guarantee the "Proximity Principle".
3. **Pure Views:** Ensure UI components (`SortingVisualizer`, `Canvas`) act strictly as presentation layers that are completely oblivious to the heavy business logic.

*By establishing this Feature-Based Architecture, the application will be highly maintainable and perfectly suited for future expansions like an interactive "Step-by-Step execution" mode.*
