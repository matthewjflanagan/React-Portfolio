import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import './App.css'
import Portfolio from './components/pages/Portfolio';

const App = () => {
  return (
    <div className="mainDiv">
      <Navigation />
      <Portfolio />
      <Portfolio />
      <Portfolio />
      <Portfolio />
      {/* <Header />
      <Footer /> */}
    </div>
  )
};

export default App;
