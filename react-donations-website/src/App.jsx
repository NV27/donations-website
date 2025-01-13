import React from 'react';
import { useState } from 'react'
import './App.css'
import {BrowserRouter, Link, Routes, Route, useLocation} from 'react-router-dom'
import About from './components/About/About'
import Donate from './components/Donate/Donate'
import Blog from './components/Blog/Blog'

function App() {
    return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    )
}

function Main() {

    const [pageTitle, setTitle] = useState('About');
    const location = useLocation();

    React.useEffect(() => {
        switch (location.pathname) {
            case '/about':
                setTitle('ABOUT');
                break;
            case '/donate':
                setTitle('DONATE');
                break;
            case '/blog':
                setTitle('BLOG');
                break;
            default:
                setTitle('ABOUT');
        }
    }, [location]);

  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="page-container">
            <div className="nav-bar">
                <div className="about-nav-button nav-button">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="donate-nav-button nav-button">
                    <a><Link to="/donate">DONATE</Link></a>
                </div>
                <div className="blog-nav-button nav-button">
                    <Link to="/blog">BLOG</Link>
                </div>
            </div>
            <div className="big-container">
                <h1>{pageTitle}</h1>
                <div className="main-container">
                    <Routes>
                        <Route path="/about" element={<About myFunction={setTitle}/>}/>
                        <Route path="/donate" element={<Donate myFunction={setTitle}/>}/>
                        <Route path="/blog" element={<Blog myFunction={setTitle}/>}/>
                        <Route path="*" element={<About/>}/>
                    </Routes>
                </div>
                <div className="footer-container">
                    <div className="footer-year">
                        2025
                    </div>
                    <div className="footer-content">
                        FOOTER CONTENT
                    </div>
                    <div className="footer-socials">
                        <div className="social-1 social">
                            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
                        </div>
                        <div className="social-2 social">
                            <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                        </div>
                        <div className="social-3 social">
                            <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
