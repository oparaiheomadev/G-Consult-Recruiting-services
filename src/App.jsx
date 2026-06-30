import Navbar from './components/Navbar';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Industries from './routes/Industries';
import Service from './routes/Service';
import AboutUs from './routes/AboutUs';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Perloader';

function App() {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ services" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
