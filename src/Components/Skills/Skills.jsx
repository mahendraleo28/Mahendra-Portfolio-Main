import React from "react";
import "./skills.css";
import ProgressBar from "@ramonak/react-progress-bar";


export default function Skills() {
    return (
        <div className="main-div-in-skills-page">
            <div>
                <div className="div-tag-in-aboute-me-page">
                    <span className="span-tag-in-skill-page" >MY SPECIALTY</span>
                    <h2 className="h2-tag-in-skill-page">MY SKILLS</h2>
                    <p className="paragraph-tag-in-skill-page">A Java developer is responsible for designing, developing, and maintaining Java-based programs. His skill set would include writing a well-structured and developed code that would withstand rigorous testing and analysis.</p>
                    <div className="progress-bar-main-div-in-skill-page">
                        <div className="for-progress-bar-in-skills-page">
                            <div className="for-progress-bar-in-skills-page-2tags-1st-tag">
                                <span>Html
                                <ProgressBar className="progress-bar-for-html" completed={80} />
                                </span>
                            </div>
                            <div className="for-progress-bar-in-skills-page-2tags-2nd-tag">
                                <span>Css
                                <ProgressBar className="progress-bar-for-css" completed={70} />
                                </span>
                            </div>
                            <div className="for-progress-bar-in-skills-page-2tags-1st-tag">
                                <span>Java Script
                                <ProgressBar className="progress-bar-for-java-script" completed={60} />
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
                                    <ProgressBar className="progress-bar-for-java" completed={60} />
                                     </span>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="first-image-in-skills-tab" src="https://xmple.com/wallpaper/single-plain-white-one-colour-solid-color-1024x576-c-ffffff-f-24.svg" alt="" />
            </div>
        </div>
    )
}