import { BrowserRouter, Route, Routes } from "react-router-dom"
import EstilosGlobais from "./Style/EstiloGlobal"
import Home from "./Components/Pages/Home"

function App() {

  return (
    <BrowserRouter>
    <EstilosGlobais/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
