import React from 'react'
import Sidebar from './Components/Sidebar'
import Info from './Info'
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <Info />
    </div>
  )
}

export default App