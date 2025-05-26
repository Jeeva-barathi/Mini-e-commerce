
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API = "https://mini-e-com-backend.onrender.com"; 

function App() {
  const [cartItems, setCartitems] = useState([]);

  return (
    <div className="App">

      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartitems={setCartitems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartitems={setCartitems} />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
