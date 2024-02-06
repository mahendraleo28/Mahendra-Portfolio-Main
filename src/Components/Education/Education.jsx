import React, { useState } from 'react';
import './education.css';

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
            <div
                className={`accordion-header ${isOpen ? 'active-header' : ''}`}
                onClick={() => onToggle(id)}
            >
                <div className='for-tittle-and-arrow'>
                    <div className='tittle-of-accordians'>{title}</div>
                    <div className="arrow">{isOpen ? '▶' : '▶'}</div>
                </div>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Education = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (accordionId) => {
        setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
    };

    return (
        <div className="main-div-in-edu-page">
            <div className="div-tag-in-aboute-me-page">
                <span className="span-tag-in-edu-page">Education</span>
                <h2 className="h2-tag-in-edu-page">Education</h2>
                <div className="accordion-tag-in-edu-tag">
                    <AccordionItem
                        id={1}
                        title="Bachelor Degree of Information Technology "
                        content={
                            <div>
                                <strong>Bachelor of Information Technology (B.IT) | Cumulative Grade Point Average (CGPA): 7.00/10.00. </strong>
                                 I am proud to present my Bachelor's degree in Information Technology, an academic journey that has equipped me with a robust foundation in cutting-edge technologies and comprehensive problem-solving skills. Achieving a commendable Cumulative Grade Point Average (CGPA) of 7.00 out of 10.00 reflects my dedication to academic excellence and a deep passion for the field.
                            <a href='https://drive.google.com/file/d/1nrdsETwN6NEQhZjL0r8rFLBsQZQDF75r/view?usp=drivesdk'>📄</a>
                            </div>
                        }
                        isOpen={openAccordion === 1}
                        onToggle={toggleAccordion}
                    />
                    <AccordionItem
                        id={2}
                        title="diploma in metallurgical engineering"
                        content={
                            <div>
                                <strong>Diploma in Metallurgical Engineering | Govt Polytechnic Vijayawada. </strong>
                                I am delighted to present my Diploma in Metallurgical Engineering, a comprehensive program that has laid the groundwork for my journey in the field of materials science and engineering. This diploma, earned from Govt polytechnic vijayawada, reflects my commitment to excellence and passion for understanding and manipulating the properties of metals and alloys.
                                <a href='https://drive.google.com/file/d/1yBkEWU5x0X8WZrxQ7w7Iv-7tLYHl3X3X/view?usp=drivesdk'>📄</a>
                            </div>
                        }
                        isOpen={openAccordion === 2}
                        onToggle={toggleAccordion}
                    />
                    <AccordionItem
                        id={3}
                        title="high school secondary education"
                        content={
                            <div>
                                <strong>High School Secondary Education | Zilla Parishad High School. </strong>
                                I am pleased to showcase my academic journey through high school, culminating in a Cumulative Grade Point Average (CGPA) of 7.5. My secondary education at zilla parishad high school has been a formative period, laying the groundwork for my intellectual and personal development.
                                <a href='https://teams.microsoft.com/l/message/48:notes/1707207766133?context=%7B%22contextType%22%3A%22chat%22%7D'>📄</a>
                            </div>
                        }
                        isOpen={openAccordion === 3}
                        onToggle={toggleAccordion}
                    />
                </div>
            </div>
            <img
                className="first-image-in-edu-tab"
                src="https://xmple.com/wallpaper/single-plain-white-one-colour-solid-color-1024x576-c-ffffff-f-24.svg"
                alt=""
            />
        </div>
    );
};

export default Education;
