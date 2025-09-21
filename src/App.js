import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
  </Router>
  );
}

export default App;
