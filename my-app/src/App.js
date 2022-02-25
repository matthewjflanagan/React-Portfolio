import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Home from './pages/Home';
import About from './components/About';

function App () {
  return (
    <Router>
    <div className='mainDiv'>
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
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