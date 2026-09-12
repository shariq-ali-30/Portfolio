import React from "react";

const AddSkillModal = ({ isAddSkillModalOpen, setIsAddSkillModalOpen }) => {
  let closeModal = () => setIsAddSkillModalOpen(false);

  return (
    <div className={`add-skill-modal-container ${isAddSkillModalOpen ? "active" : ""}`}>
      <div className="add-skill-modal">
        <div className="add-skill-modal-header">
          <div>
            <div className="add-skill-modal-title">
              <div className="add-skill-modal-icon">
                <i className="ph-fill ph-lightning"></i>
              </div>

              <div>
                <h2>Add Skill</h2>
                <p>Add a new skill to your portfolio</p>
              </div>
            </div>
          </div>

          <button onClick={closeModal} className="add-skill-modal-close">
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="add-skill-modal-line"></div>

        <form className="add-skill-form">
          <div className="add-skill-input-group">
            <label>Skill Name</label>

            <div className="add-skill-input-wrapper">
              <i className="ph ph-text-aa"></i>
              <input type="text" placeholder="e.g. HTML, React, Node.js" />
            </div>
          </div>

          <div className="add-skill-input-group">
            <label>Skill Image/Icon</label>

            <div className="add-skill-input-wrapper">
              <i className="ph ph-image"></i>
              <input type="text" placeholder="Enter image path or URL" />
            </div>
          </div>

          <div className="add-skill-modal-footer">
            <button onClick={closeModal} type="button" className="add-skill-cancel-btn">
              Cancel
            </button>

            <button type="button" className="add-skill-save-btn">
              <i className="ph ph-plus"></i>
              Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;