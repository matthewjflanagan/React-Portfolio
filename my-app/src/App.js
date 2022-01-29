import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css'
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="mainDiv">
      <Navigation />
      <About />
      <Portfolio />
      {/* <Header />
      <Footer /> */}
    </div>
  )
};

export default App;
