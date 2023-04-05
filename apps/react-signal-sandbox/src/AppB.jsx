import { useState } from 'react'
import './App.css'
import counter from './signals.js'

function App() {
  return (
    <div className="App">
      <h1>Component App B</h1>
      <div className="card">
          count is {counter}
      </div>
    </div>
  )
}

export default App
