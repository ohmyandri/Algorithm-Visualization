import React, { useRef, useState, useEffect, useCallback } from 'react';
import "./CanvasComponent.css";

export default function CanvasComponent({array, setArray, isRunning}) {
  const canvasRef = useRef(null);
  const [activeBarIndex, setActiveBarIndex] = useState(null);

  const handleMouseDown = (index) => {
    if (isRunning) return;
    setActiveBarIndex(index);
  };

  const handleMouseMove = useCallback((e) => {
    if (activeBarIndex === null || isRunning || !canvasRef.current) return;
    
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const canvasHeight = canvasRect.height;
    
    // Calculate distance from bottom of canvas
    const relativeY = e.clientY - canvasRect.top;
    
    // Percentage from bottom to top
    let newHeightPercent = 1 - (relativeY / canvasHeight);
    
    // Clamp between 0.01 (10) and 1 (1000)
    newHeightPercent = Math.max(0.01, Math.min(1, newHeightPercent));
    const newValue = Math.floor(newHeightPercent * 1000);
    
    setArray(prevArray => {
      const newArray = [...prevArray];
      newArray[activeBarIndex] = newValue;
      return newArray;
    });
  }, [activeBarIndex, isRunning, setArray]);

  const handleMouseUp = useCallback(() => {
    setActiveBarIndex(null);
  }, []);

  useEffect(() => {
    if (activeBarIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeBarIndex, handleMouseMove, handleMouseUp]);

  return (
    <div className="canvas" ref={canvasRef} style={{ userSelect: "none" }}>
      {array.map((value, index) => (
        <div
          className="arrayBar"
          key={index}
          onMouseDown={() => handleMouseDown(index)}
          style={{
            height: `${(value / 1000) * 100}%`,
            backgroundColor: "turquoise",
            margin: "0 2px",
            display: "inline-block",
            cursor: isRunning ? "default" : "ns-resize"
          }}
        >
        </div>
      ))}
    </div>
  )
}
