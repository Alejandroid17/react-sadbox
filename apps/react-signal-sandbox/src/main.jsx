import React from 'react'
import ReactDOM from 'react-dom/client'
import AppA from './AppA'
import AppB from './AppB'
import './index.css'

ReactDOM.createRoot(document.getElementById('cell-a')).render(
  <React.StrictMode>
    <AppA />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('cell-b')).render(
  <React.StrictMode>
    <AppB />
  </React.StrictMode>,
)
