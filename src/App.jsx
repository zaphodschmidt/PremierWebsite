import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
//Pages
import Menu from "./components/menu/Menu.jsx"
import Bar from "./components/bar/Bar.jsx"
import Home from "./components/Home";
import Clients from "./components/Clients.jsx";
import OrderComplete from "./components/OrderComplete";
import AboutUs from "./components/AboutUs";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import customTheme from "./theme.jsx"
import "./app.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <div className="app">
          <Bar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="clients" element={<Clients />} />
              <Route path="aboutUs" element={<AboutUs />} />
              <Route path="staff" element={<Staff />} />
              <Route path="contact" element={<Contact />} />
              <Route path="orderComplete" element={<OrderComplete />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
