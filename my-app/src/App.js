import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css'
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="mainDiv">
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
};

export default App;
