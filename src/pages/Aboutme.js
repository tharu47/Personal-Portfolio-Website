import React from "react";
import "./Pages.css";
import proimg from '../assets/myimgss.png';

function Aboutme() {
  return (
    <div className="containerA">
  <div className="image-containerA">
    <img
      src={proimg}
      alt="Person working on a laptop"
      className="profile-imageA"
    />
  </div>
  <div className="text-container">
    <h1 className="title">
      Who am <span className="highlight">I </span>?
    </h1>
    <p className="description">
      I am a dedicated undergraduate at the BCI Campus, pursuing a Bachelor of
      Science Honors in Information Technology (BSc.IT). My primary objective
      is to excel in Software Engineering through relentless effort, a
      strategic approach, and an unquenchable thirst for knowledge. Proficient
      in multitasking, I effectively balance academic pursuits with active
      involvement in youth activities, honing my leadership and interpersonal
      skills. My core strengths include a profound sense of responsibility,
      unwavering determination, and an insatiable appetite for continuous
      learning, propelling me towards significant career milestones.
    </p>
  </div>
</div>

  );
}

export default Aboutme;
