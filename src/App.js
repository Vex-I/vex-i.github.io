import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import BlogView from './pages/BlogView';
import BlogPost from './pages/BlogPage';
import ProjectView from './pages/ProjectView';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import MainWiki from './pages/MainWiki'


function App() {
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem("theme") === "light" ? "light" : "dark";
    });

    console.log("API:", process.env.REACT_APP_API_URI)
    React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Router>
        <NavBar />
        <ScrollToTop/>
        <div style={{padding: '4em 0 0 0', marginBottom:'4em', minHeight:'100vh'}}>
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/blog" element={<BlogView/>}/>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/project" element={<ProjectView/>}/>
        <Route path="*" element={<NotFound/>} />
        <Route path="/wiki" element={<MainWiki/>}/>
        </Routes>
        </div>
        <Footer />
        </Router>
    );
}

export default App;


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
