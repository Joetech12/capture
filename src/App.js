import React from 'react';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';




function App() {
  return (
    <div className="App">
          <GlobalStyle />
          
          
          <Router>
          <Nav />
            <Routes>
              <Route path="/" element={<AboutUs />} />
              <Route path="/work" element={<OurWork />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </Router>
          
            
          
          
        
    </div>
  );
}

export default App;
