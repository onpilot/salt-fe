import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Specialty from './components/Specialty';
import TextCarousel from './components/TextCarousel';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TextCarousel />
      <Values />
      <Specialty />
      <Footer />
    </div>
  );
}

export default App;
