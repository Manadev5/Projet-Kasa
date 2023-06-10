import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import Apropos from './Pages/A-propos';
import Apartments from './Pages/Apartments';
import Header  from "./Components/Header";
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const route = ReactDOM.createRoot(document.getElementById('root'));

route.render(
<React.StrictMode>
  <Router>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apartments" element={<Apartments />} />
      <Route path="/Apropos"  element={<Apropos />} />
    </Routes>
  </Router>
  <Footer />
</React.StrictMode>
)
