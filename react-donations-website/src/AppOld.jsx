import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    let titleName = "ABOUT";

  return (
    <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="page-container">
            <div className="nav-bar">
                <div className="about-nav-button">
                    <h2><a href="about">ABOUT</a></h2>
                </div>
                <div className="donate-nav-button">
                    <h2><a href="donate">DONATE</a></h2>
                </div>
                <div className="blog-nav-button">
                    <h2><a href="blog">BLOG</a></h2>
                </div>
            </div>
            <div className="big-container">
                <h1>{titleName}</h1>
                <div className="main-container">
                    <div className="main-content main-1">
                        <div className="left-content">
                            <h3>THE FAMILY</h3>
                            <p>bunch of text bunch of text bunch of text bunch of text bunch of text bunch of text bunch
                                of text bunch of text bunch of text bunch of text bunch of text bunch of text bunch of
                                text bunch of text
                            </p>
                        </div>
                        <div className="right-content">
                            <img src={"src/assets/image00.png"} className="family-image" alt={"a family stood together"} />
                        </div>
                    </div>
                    <div className="main-content main-2">
                        <div className="left-content">
                            <img src={"src/assets/image00.png"} className="family-image"  alt={"a family stood together"}/>
                        </div>
                        <div className="right-content">
                        <h3>YOUR CONTRIBUTION</h3>
                            <p>bunch of text bunch of text bunch of text bunch of text bunch of text bunch of text bunch
                                of text bunch of text bunch of text bunch of text bunch of text bunch of text bunch of
                                text bunch of text
                            </p>
                        </div>
                    </div>
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
    </>
  )
}

export default App
