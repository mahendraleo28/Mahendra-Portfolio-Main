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

  const handleClickhome = () => {
    closeMenuAndScroll(ref1);
  };
  const handleClickabout = () => {
    closeMenuAndScroll(ref2);
  };
  const handleClickskills = () => {
    closeMenuAndScroll(ref3);
  };
  const handleClickeducations = () => {
    closeMenuAndScroll(ref4);
  };
  const handleClickexperience = () => {
    closeMenuAndScroll(ref5);
  };
  const handleClickcontact = () => {
    closeMenuAndScroll(ref6);
  };

  const closeMenuAndScroll = (ref) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setActiveSection(index);
            }
          });
        },
        { rootMargin: "0px 0px -30% 0px" } // Adjust the root margin as needed
      );

      const sections = [ref1, ref2, ref3, ref4, ref5, ref6];
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
      });
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
            src="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
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
      {!isMenuOpen && (
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
    )}
    </div>
  );
}
