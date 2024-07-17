import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dogbreeds from "./pages/dogbreeds";
import Pups from "./pages/pups";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dogbreeds" element={<Dogbreeds />} />
        <Route path="/pups" element={<Pups />} />
      </Routes>
    </Router>
  );
}

export default App;
