import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import "./landing.css";

export default function Landing() {
  return (
    <div className="main-div-in-landing-page">
      <div className="div-tag-in-landing-page">
        <div className="div-for-header-tags-in-second-div">
          <h1 className="Header-tag-for-text-in-second-div">Hi!</h1>
          <h1 className="Header-tag-for-text-in-second-div">I'm Mahendra</h1>
          <div className="button-to-download-resume">
            <span>Download CV </span>
            <span>
              <CiSaveDown2 fontSize="small" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
