import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import BlogView from './pages/BlogView';
import BlogPost from './pages/BlogPage';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


function App() {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") === "light" ? "light" : "dark";
    });

    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<BlogView/>}/>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
        </Router>
    );
}

export default App;
