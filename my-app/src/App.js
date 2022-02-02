import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css'
import Project from './components/pages/Project';
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'

const App = () => {
  return (
    <Router>
    <div className='mainDiv'>
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/Project" component={Project} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} />
      </Routes>
      <Footer />
    </div>
    //{' '}
    </Router>
  )
};

export default App;