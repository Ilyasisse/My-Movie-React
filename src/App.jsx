import Home from "./Pages/HomePage"

import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import MoviePage from "./Pages/MoviePage"
import MovieInfoPage from "./Pages/MovieInfoPage"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<MoviePage/>}></Route>
        <Route path="/movies/:id" element={<MovieInfoPage/>}></Route>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
