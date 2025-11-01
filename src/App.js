import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './Components/Views/Landing';
import Login from './Components/Views/Login';
import Home from './Components/Pages/Home';
import Combo from "./Components/Pages/Combo";

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
         <Route path="/combo" element={<Combo />} />
      </Routes>
    </Router>
  );
}

export default App;
