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
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route exact path="./components/pages/Home" component={Home} />
        <Route exact path="./components/pages/Project" component={Project} />
        <Route path="./components/pages/Contact" component={Contact} />
        <Route path="./components/pages/Resume" component={Resume} />
      </Routes>
      <Footer />
    </div>
    //{' '}
    </Router>
  )
};

export default App;