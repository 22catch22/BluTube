import { useState } from 'react'
import Homepage from './pages/Homepage'
import './App.css'
import{Routes, Route, Link} from 'react-router';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
