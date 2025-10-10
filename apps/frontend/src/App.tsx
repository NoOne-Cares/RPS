
import './App.css'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Page404 } from './pages';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
