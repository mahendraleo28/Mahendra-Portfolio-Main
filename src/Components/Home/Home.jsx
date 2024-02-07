import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuAndScroll = (ref, index) => {
    setIsMenuOpen(false);
    setActiveSection(index);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickhome = () => {
    closeMenuAndScroll(ref1, 0);
  };
  const handleClickabout = () => {
    closeMenuAndScroll(ref2, 1);
  };
  const handleClickskills = () => {
    closeMenuAndScroll(ref3, 2);
  };
  const handleClickeducations = () => {
    closeMenuAndScroll(ref4, 3);
  };
  const handleClickexperience = () => {
    closeMenuAndScroll(ref5, 4);
  };
  const handleClickcontact = () => {
    closeMenuAndScroll(ref6, 5);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [ref1, ref2, ref3, ref4, ref5, ref6];
      for (let index = 0; index < sections.length; index++) {
        const sectionRef = sections[index].current;
        if (sectionRef) {
          const { top, bottom } = sectionRef.getBoundingClientRect();
          if (top <= window.innerHeight / 4 && bottom >= window.innerHeight / 4) {
            setActiveSection(index);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`main-div-in-rec ${isMenuOpen ? "mobile-menu-open" : ""}`}>
      {isMenuOpen && (
        <div className="overlay" onClick={toggleMenu}></div>
      )}
      <div className={`hamburger-menu ${isMenuOpen ? "hide" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`div-tag-for-navbar ${isMenuOpen ? "active" : ""}`}>
        <div>
          <img
            className="image-in-sidebar"
            src={process.env.PUBLIC_URL + '/images/photo1.jpg'} alt=" "
          />
          <h1 className="text-in-header-for-homepage">Mahendra Suvarnaganti</h1>
          <h5 className="sub-tag-in-navbar-text">Software Developer</h5>
        </div>
        <ul className="unorder-list-tags">
          <li className={activeSection === 0 ? "active-tab" : "nothing"} onClick={handleClickhome}>
            Home
          </li>
          <li className={activeSection === 1 ? "active-tab" : "nothing"} onClick={handleClickabout}>
            About
          </li>
          <li className={activeSection === 2 ? "active-tab" : "nothing"} onClick={handleClickskills}>
            Skills
          </li>
          <li className={activeSection === 3 ? "active-tab" : "nothing"} onClick={handleClickeducations}>
            Education
          </li>
          <li className={activeSection === 4 ? "active-tab" : "nothing"} onClick={handleClickexperience}>
            Experience
          </li>
          <li className={activeSection === 5 ? "active-tab" : "nothing"} onClick={handleClickcontact}>
            Contact
          </li>
        </ul>
        <div className="small">
          <small>© Copyright ©2024 All rights reserved</small>
        </div>
      </div>
      <div className="This-is-secnd-container">
        <div ref={ref1}>
          <Landing />
        </div>
        <div ref={ref2}>
          <About />
        </div>
        <div ref={ref3}>
          <Skills />
        </div>
        <div ref={ref4}>
          <Education />
        </div>
        <div ref={ref5}>
          <Experience />
        </div>
        <div ref={ref6}>
          <Contact />
        </div>
      </div>
    </div>
  );
}
