import React, { useEffect, useRef, useState } from 'react';
import './contact.css';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
    const conref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = conref.current;
            if (element) {
                const { top, bottom } = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (top < windowHeight && bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
      <div ref={conref} className={`main-div-in-contact-page ${isVisible ? 'fade-in-right' : ''}`}>
        <div>
          <div className="div-tag-in-contact-page">
            <span className="span-tag-in-contact-page">Get In Touch</span>
            <h2 className="h2-tag-in-contact-page">Contact</h2>
            <div className="col-md-5 for-handling-width-in-contact-page">
              <div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <div className="icon-for-all-types-in-contact" aria-label="Email">✉</div>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="mailto:mahendraleo28@gmail.com">mahendraleo28@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="colorlib-feature colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <div className="icon-for-all-types-in-contact" aria-label="Address">🏠︎</div>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="https://maps.app.goo.gl/F9WY5woNQ9Lic1G2A">3/122, Near Panchayat Road, Tadanki Village, Pincode:521256</a>
                  </p>
                </div>
              </div>
              <div className="colorlib-feature-1 colorlib-feature-sm animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon-1">
                  <div className="icon-for-all-types-in-contact" aria-label="Phone">☏</div>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="tel:+917306306828">+91 730 630 6828</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }