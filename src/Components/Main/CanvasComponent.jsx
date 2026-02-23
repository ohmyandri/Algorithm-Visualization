import React from 'react'

export default function CanvasComponent({array}) {
  return (
    <div className="canvas">
      {array.map((value, index) => (
        <div
          className="arrayBar"
          key={index}
          style={{
            height: `${(value / 1000) * 100}%`,
            backgroundColor: "turquoise",
            margin: "0 2px",
            display: "inline-block",
          }}
        >
        </div>
      ))}
    </div>
  )
}
