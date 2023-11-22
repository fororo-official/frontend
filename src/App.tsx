import './App.css'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Button variant='default'>Home</Button>} />
          <Route path="/about" element={<Button>About</Button>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
