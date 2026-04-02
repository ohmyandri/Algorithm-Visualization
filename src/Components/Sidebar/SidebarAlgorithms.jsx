import React from 'react'

function SidebarAlgorithms({ value, algorithm, setAlgorithm }) {
  return (
    <>
      <button type="button"
        className={`algoButton ${algorithm === value ? 'selected' : ''}`}
        onClick={() => setAlgorithm(value)}
      >{value}</button>
    </>
  )
}

export default SidebarAlgorithms