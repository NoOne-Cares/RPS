
import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Page404, Game } from './pages';
import Navbar from './components/Navbar';
function App() {


  return (
    <BrowserRouter>
      <div className='flex justify-center'><Navbar /></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/game' element={<Game />} />
        {/* <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":projectID" element={<ProjectsShow />} />
        </Route>
        <Route path="*" element={<Page404 />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
