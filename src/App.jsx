import { Route, Routes } from "react-router-dom"
import { Nav } from "./layout/Nav"
import { Home } from './layout/Home'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
