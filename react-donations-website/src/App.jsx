import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Donate from './components/Donate/Donate'
import Blog from './components/Blog/Blog'

function App() {
    let titleName = "ABOUT";

  return (
    <BrowserRouter>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="page-container">
            <div className="nav-bar">
                <div className="about-nav-button">
                    <Link to="/about" className="nav-button">ABOUT</Link>
                </div>
                <div className="donate-nav-button">
                    <Link to="/donate" className="nav-button">DONATE</Link>
                </div>
                <div className="blog-nav-button">
                    <Link to="/blog" className="nav-button">BLOG</Link>
                </div>
            </div>
            <div className="big-container">
                <h1>{titleName}</h1>
                <div className="main-container">
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/donate" element={<Donate/>}/>
                        <Route path="/blog" element={<Blog/>}/>
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
                            <a href="#" className="fa fa-facebook"></a>
                        </div>
                        <div className="social-2 social">
                            <a href="#" className="fa fa-instagram"></a>
                        </div>
                        <div className="social-3 social">
                            <a href="#" className="fa fa-youtube"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
  )
}

export default App
