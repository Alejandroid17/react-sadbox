import './App.css'
import counter, { sum } from './signals.js'

function App() {

  return (
    <div className="App">
      <h1>Component App A</h1>
      <div className="card">
        <button className='button' onClick={sum}>
          Click me ( {counter} )
        </button>
      </div>
    </div>
  )
}

export default App
