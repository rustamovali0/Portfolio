import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Experience from "./Components/Pages/Experience";
import Work from "./Components/Pages/Work";
import Education from "./Components/Pages/Education";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
