import React from "react";
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter,Routes, Route, Switch } from 'react-router-dom';
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";
import Contact from "./screens/Contact.js";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
