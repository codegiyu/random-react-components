import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Timeline1 } from './pages/Timeline1';
import { Carousel1 } from './pages/Carousel1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline-1" element={<Timeline1 />} />
        <Route path="/carousel-1" element={<Carousel1 />} />
      </Routes>
    </Router>
  );
}

export default App;
