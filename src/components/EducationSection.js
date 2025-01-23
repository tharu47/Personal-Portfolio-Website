import React from 'react';
import '../App.css'; // Make sure to include the updated CSS in your project

const EducationSection = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-graduation-cap"></i> {/* Example Icon */}
          </div>
          <div className="timeline-content">
            <h3>2022 - Present</h3>
            <h4>Benedict XVI Catholic Institute <br />(BCI Campus) - Negombo</h4>
            <p>BSc (Hons) in Information Technology (Reading)</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-book"></i> {/* Example Icon */}
          </div>
          <div className="timeline-content">
            <h3>2020</h3>
            <h4>Ananda Sasthralaya National School - Matugama</h4>
            <p>G.C.E. Advanced Level Examination</p>
            <p>C C S - Technology Stream</p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-school"></i> {/* Example Icon */}
          </div>
          <div className="timeline-content">
            <h3>2016</h3>
            <h4>K/ Miriswaththa National School - Pelawaththa</h4>
            <p>G.C.E. Ordinary Level Examination</p>
            <p>5A's 2B's and 2C's</p>
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="fas fa-pen"></i> {/* Example Icon */}
          </div>
          <div className="timeline-content">
            <h3>2010</h3>
            <h4>K/ Miriswaththa National School - Pelawaththa</h4>
            <p>Grade 5 Scholarship Examination</p>
            <p>142 (Cut-off mark - 148)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
