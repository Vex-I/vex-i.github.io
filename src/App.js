import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';

function App() {
  return (
  <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
  </Router>
  );
}

export default App;
