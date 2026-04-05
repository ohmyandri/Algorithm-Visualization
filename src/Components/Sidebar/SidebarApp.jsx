import SidebarActions from "./SidebarActions.jsx";
import SidebarAlgorithms from "./SidebarAlgorithms.jsx";
import SidebarParameters from "./SidebarParameters.jsx";
import "./SidebarApp.css";

function SidebarApp({ controls, resetArray, runAlgorithm, closeSidebar }) {
  //Destructuring the objects:
  const { size, setSize, speed, setSpeed, algorithm, setAlgorithm, runningState } = controls;

  //Refactor to the buttons:
  const algorithmsList = [
    "Bubble Sort",
    "Insertion Sort",
    "Quick Sort",
    "Merge Sort"
  ];

  return (
    <div
      className={`sidebarComponent ${runningState ? "disabled-ui" : ""}`}
      style={{
        padding: "25px 24px",
      }}
    >

      {/* Section with the algorithms selector */}
      <section>
        <div className="sidebarAlgorithms">
          <div 
            className="sidebarAlgorithmsTitle interactiveClose" 
            onClick={closeSidebar}
            title="Close Settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <h1>SETTINGS</h1>
          </div>

          <div className="sidebarAlgorithmsList">
            {algorithmsList.map((algoName, index) => (
              <SidebarAlgorithms
                key={index}
                value={algoName}
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section with the parameters selector */}
      <section>
        <h1>CONFIGURATION</h1>
        {/* Array Size */}
        <SidebarParameters
          sliderValue={size}
          label={"Array Size"}
          minValue={10}
          maxValue={100}
          step={10}
          handleChange={setSize}
        ></SidebarParameters>

        {/* Speed of the animations */}
        <SidebarParameters
          label={"Animation Speed"}
          minValue={1}
          maxValue={5}
          step={1}
          sliderValue={speed}
          handleChange={setSpeed}
        ></SidebarParameters>
      </section>

      {/* Section dedicated to te actions of the sidebar, run, step by step, reset array, etc */}
      <section>
        <SidebarActions resetArrayOnClick={resetArray} runAlgorithmOnClick={runAlgorithm}></SidebarActions>
      </section>
    </div>
  );
}

export default SidebarApp;
