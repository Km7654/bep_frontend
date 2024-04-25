import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Intro from './intro.jsx';
import Docx from './docx.jsx';
import Installation from './installation.jsx';
import Contributors from './contributors.jsx';
import Footer from './footer.jsx'

function smoothScroll(hash) {
    if (hash !== "") {
        event.preventDefault();
        const targetElement = document.querySelector(hash);
        const targetOffset = targetElement.offsetTop;
        const scrollAnimation = function() {
            if (window.scrollY < targetOffset) {
                window.scrollBy(0, 40);
                requestAnimationFrame(scrollAnimation);
            }
        };
        requestAnimationFrame(scrollAnimation);
    }
}

function SmoothScrollLinks() {
    React.useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                smoothScroll(this.hash);
            });
        });
    }, []);

    return null; 
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Intro />
    <Docx />
    <Installation />
    <SmoothScrollLinks />
    <Contributors/>
    <Footer/>
    </>
    
);
