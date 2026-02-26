import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import NavBar from './components/NavBar'
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;