import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Resume1 from './pages/Resume1'
import Resume2 from './pages/Resume2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume/asadullah" element={<Resume1 />} />
      <Route path="/resume/nihal" element={<Resume2 />} />
    </Routes>
  )
}

export default App

