import { useState } from 'react'
import SidebarApp from './Components/Sidebar/SidebarApp.jsx'
import './App.css'
import SortingVisualizer from './Components/Main/SortingVisualizer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='appContainer'>
      <SortingVisualizer></SortingVisualizer>
    </div>
  )
}

export default App
