import { useEffect, useRef, useState } from "react";
import "./experience.css";
export default function Experience() {
    const [isVisible, setIsVisible] = useState(false);
    const expref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const element = expref.current;
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
        <div ref={expref} className={`main-div-in-experience-page ${isVisible ? 'fade-in-right' : ''}`}>
            <div>
                <div className="div-tag-in-experience-page">
                    <span className="span-tag-in-experience-page" >EXPERIENCE</span>
                    <h2 className="h2-tag-in-experience-page">WORK EXPERIENCE</h2>
                    <div className="timeline-centered">
                        <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-1">
                                    ✎
                                </div>
                                <div className="timeline-label">
                                    <h2>
                                        <a href=" ">Full Stack Developer </a>
                                        <span> Aug 2022 - Present</span>
                                    </h2>
                                    <p>
                                        <strong>Full Stack Developer | Infinite Computer Solutions. </strong>
                                        I am proud to share my experience as a Full Stack Developer at Infinite Computer Solutions, where I played a pivotal role in designing and implementing robust, end-to-end solutions for diverse client needs. My tenure at Infinite Computer Solutions has not only enhanced my technical proficiency but also enriched my problem-solving and collaborative skills.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-2">
                                    ✎
                                </div>
                                <div className="timeline-label">
                                    <h2>
                                        <a href="https://drive.google.com/file/d/1J-tGa9JqJfioRY9cJ5Fh9qS3Q47xSGMN/view?usp=drivesdk">Intership at TECHADEMY</a>
                                        <span> Feb 2022 - July 2022</span>
                                    </h2>
                                    <p>
                                        <strong>Intern | Techademy </strong>
                                        I am thrilled to share my enriching experience as an intern at Techademy, where I dedicated six months to hands-on learning, professional development, and contributing to the dynamic environment of a technology-driven organization.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                            <div className="timeline-entry-inner">
                                <div className="timeline-icon color-none"> </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}