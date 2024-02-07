import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = ref.current;
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
        <div ref={ref} className={`main-div-in-skills-page ${isVisible ? 'fade-in-right' : ''}`}>
            <div className="div-tag-in-aboute-me-page">
                <span className="span-tag-in-skill-page">MY SPECIALTY</span>
                <h2 className="h2-tag-in-skill-page">MY SKILLS</h2>
                <p className="paragraph-tag-in-skill-page">
                    Experienced in Java and React for end-to-end development.
                    Proven ability to craft scalable solutions, design responsive UIs,
                    and collaborate cross-functionally.
                    Passionate about staying current with evolving technologies.
                </p>
                <div className="progress-bar-main-div-in-skill-page">
                    <div className="for-progress-bar-in-skills-page">
                        <div className="for-progress-bar-in-skills-page-2tags-1st-tag">
                            <span>Html
                                <ProgressBar className="progress-bar-for-html" completed={90} />
                            </span>
                        </div>
                        <div className="for-progress-bar-in-skills-page-2tags-2nd-tag">
                            <span>Css
                                <ProgressBar className="progress-bar-for-css" completed={80} />
                            </span>
                        </div>
                        <div className="for-progress-bar-in-skills-page-2tags-1st-tag">
                            <span>Java Script
                                <ProgressBar className="progress-bar-for-java-script" completed={70} />
                            </span>
                        </div>
                        <div className="for-progress-bar-in-skills-page-2tags-2nd-tag">
                            <span>React
                                <ProgressBar className="progress-bar-for-react" completed={70} />
                            </span>
                        </div>
                        <div className="for-progress-bar-in-skills-page-2tags-1st-tag">
                            <span> DataBase
                                <ProgressBar className="progress-bar-for-database" completed={70} />
                            </span>
                        </div>
                        <div className="for-progress-bar-in-skills-page-2tags-2nd-tag">
                            <span>Java
                                <ProgressBar className="progress-bar-for-java" completed={70} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <img className="first-image-in-skills-tab" src="https://xmple.com/wallpaper/single-plain-white-one-colour-solid-color-1024x576-c-ffffff-f-24.svg" alt="" />
        </div>
    );
}
