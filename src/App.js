import './App.css';
import Aboutus from './components/About/Aboutus';
import Brand from './components/Brand/Brand';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import { filtration, initialStateicons } from './components/state';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Brand />
      <Portfolio filtration={filtration} initialStateicons={initialStateicons}/>
      <Aboutus />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
