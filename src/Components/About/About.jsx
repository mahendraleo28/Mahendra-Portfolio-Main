import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import { FaDatabase } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = aboutRef.current;
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
    <div ref={aboutRef} className={`main-div-in-about-page ${isVisible ? "fade-in-right" : ""}`}>
      <div className="div-tag-in-about-me-page">
        <span className="span-tag-in-about-me-page">ABOUT ME</span>
        <h2 className="h2-tag-in-about-page">WHO AM I?</h2>
        <p className="paragraph-tag-in-about-me-page">
          I'm a software engineer with a passion for creating innovative solutions through code.
          With a strong foundation in programming languages like Java and HTML, 
          I thrive in problem-solving and enjoy turning complex challenges into
          practical, user-friendly applications. I am dedicated to continuous learning, keeping up with industry trends, and
          applying best practices to deliver high-quality software.
        </p>
        <p className="paragraph-tag-in-about-me-page">
          Collaborating with cross-functional teams, I effectively
          communicate and contribute to the development process. My goal is to create impactful software that enhances user
          experiences and makes a positive difference in people's lives.
        </p>
      </div>
      <div className="for-all-the-four-containers fade-in-right">
        <div className="services1">
          <MdWeb className="logo-in-about-me1" />
          <h3>Web Design</h3>
        </div>
        <div className="services2">
          <FaDatabase className="logo-in-about-me2" />
          <h3>Software</h3>
        </div>
        <div className="services3">
          <FaMobileScreenButton className="logo-in-about-me3" />
          <h3>Application</h3>
        </div>
      </div>
      <img className="first-image-in-about-page" src="https://xmple.com/wallpaper/single-plain-white-one-colour-solid-color-1024x576-c-ffffff-f-24.svg" alt="" />
    </div>
  );
}
