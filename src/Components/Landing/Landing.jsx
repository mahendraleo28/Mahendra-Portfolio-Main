import React from "react";
import "./landing.css";

export default function Landing() {
  return (
    <div className="main-div-in-landing-page">
      <div className="div-tag-in-landing-page">
        <div className="div-for-header-tags-in-second-div">
          <h1 className="Header-tag-for-text-in-second-div">Hi!</h1>
          <h1 className="Header-tag-for-text-in-second-div">I'm Mahendra</h1>
          <div className="button-to-download-resume">
            <a className="a-tag-in-landingpage" href="https://drive.google.com/file/d/1UR2CcFSPXXHnpug8tLTXadagTto_lHmr/view?usp=drivesdk">Download CV ⬇</a>
            <span>
              {/* <CiSaveDown2 fontSize="medium" /> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
