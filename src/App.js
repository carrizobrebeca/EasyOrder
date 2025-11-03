import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing from './Components/Views/Landing';
import Login from './Components/Views/Login';
import Home from './Components/Pages/Home';
import Combo from "./Components/Pages/Combo";
import Order from "./Components/Pages/Order";
import Ofertas from "./Components/Pages/Ofertas";
import OldOrders from "./Components/Pages/OldOrders";
import DetailOldOrder from "./Components/Pages/DetailOldOrder";
import DetailOrder from "./Components/Pages/DetailOrder";

function App() {
  return (
        <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
         <Route path="/combo" element={<Combo />} />
         <Route path="/pedido" element={<Order />} />
             <Route path="/ofertas" element={<Ofertas />} />
             <Route path="/historial" element={<OldOrders />} />
             <Route path="/historial/detalle" element={<DetailOldOrder/>} />
             <Route path="/pedido/detalle" element={<DetailOrder/>} />
      </Routes>
    </Router>
  );
}

export default App;
