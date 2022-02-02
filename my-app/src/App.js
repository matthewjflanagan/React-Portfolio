import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home';

function App () {
  return (
    <Router>
    <div className='mainDiv'>
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
    {/* {' '} */}
    </Router>
  )
};

export default App;