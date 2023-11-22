import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
