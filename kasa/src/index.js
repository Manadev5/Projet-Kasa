import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import Apropos from './Pages/A-propos';
import Apartments from './Pages/Apartments';
import Error from './Pages/Error';
import Header  from "./Components/Header";
import Footer from './Components/Footer';
import './Components/Style/GlobalStyle.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'

const route = ReactDOM.createRoot(document.getElementById('root'));

route.render(
<React.StrictMode>
  <Router>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path = '/Apartments/:idApartment' element={<Apartments />} />
      <Route path="/Apropos"  element={<Apropos />} />
      <Route path="*"   element={<Error />} />
    </Routes>
    <Footer />
  </Router>
</React.StrictMode>
)

