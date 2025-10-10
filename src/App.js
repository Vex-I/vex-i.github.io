import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import BlogView from './pages/BlogView';
import BlogPost from './pages/BlogPage';

function App() {
  return (
  <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<BlogView/>}/>
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
  </Router>
  );
}

export default App;
