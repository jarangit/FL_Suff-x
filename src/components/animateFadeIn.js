// import React from 'react';
import ReactDOM from 'react-dom/client';
import './animateFadeIn.css';
import React, { useState, useEffect, useRef } from "react";


function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    const animate = () => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {

                // Not possible to set it back to false like this:
                setVisible(true);

                // No need to keep observing:
                observer.unobserve(domRef.current);
            }
        });
        observer.observe(domRef.current);
    }

    useEffect(() => {
        animate();
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection;