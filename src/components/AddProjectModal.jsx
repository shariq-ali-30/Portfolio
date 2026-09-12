import React from "react";

const AddProjectModal = ({isAddProjectModalOpen,setIsAddProjectModalOpen}) => {
    let closeModal = () => setIsAddProjectModalOpen(false)

  return (
    <div className={`add-project-modal-container ${isAddProjectModalOpen ? "active" : ""}`}>
      <div className="add-project-modal">
        <div className="add-project-modal-header">
          <div>
            <div className="add-project-modal-title">
              <div className="add-project-modal-icon">
                <i className="ph-fill ph-briefcase"></i>
              </div>

              <div>
                <h2>Add Project</h2>
                <p>Create a new project for your portfolio</p>
              </div>
            </div>
          </div>

          <button onClick={closeModal} className="add-project-modal-close">
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="add-project-modal-line"></div>

        <form className="add-project-form">
          <div className="add-project-input-group">
            <label>Project Name</label>

            <div className="add-project-input-wrapper">
              <i className="ph ph-text-aa"></i>
              <input type="text" placeholder="Enter project name" />
            </div>
          </div>

          <div className="add-project-input-group">
            <label>Description</label>

            <div className="add-project-input-wrapper textarea-wrapper">
              <i className="ph ph-align-left"></i>

              <textarea
                placeholder="Enter project description"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="add-project-input-group">
            <label>Project Image</label>

            <div className="add-project-input-wrapper">
              <i className="ph ph-image"></i>
              <input type="text" placeholder="Enter image path or URL" />
            </div>
          </div>

          <div className="add-project-input-row">
            <div className="add-project-input-group">
              <label>GitHub Link</label>

              <div className="add-project-input-wrapper">
                <i className="ph ph-github-logo"></i>
                <input type="url" placeholder="GitHub repository URL" />
              </div>
            </div>

            <div className="add-project-input-group">
              <label>Live Link</label>

              <div className="add-project-input-wrapper">
                <i className="ph ph-globe"></i>
                <input type="url" placeholder="Live project URL" />
              </div>
            </div>
          </div>

          <div className="add-project-input-group">
            <label>Technologies</label>

            <div className="add-project-tech-input">
              <div className="add-project-input-wrapper">
                <i className="ph ph-code"></i>

                <input type="text" placeholder="Add technology" />

                <button type="button" className="add-tech-btn">
                  <i className="ph ph-plus"></i>
                </button>
              </div>

              <div className="selected-technologies">
                <span className="admin-tech html">
                  HTML
                  <i className="ph ph-x"></i>
                </span>

                <span className="admin-tech css">
                  CSS
                  <i className="ph ph-x"></i>
                </span>

                <span className="admin-tech javascript">
                  JavaScript
                  <i className="ph ph-x"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="add-project-featured">
            <label className="featured-checkbox">
              <input type="checkbox" />

              <span className="custom-checkbox">
                <i className="ph ph-check"></i>
              </span>

              <span>
                <strong>Featured Project</strong>
                <small>Show this project in the featured section</small>
              </span>
            </label>
          </div>

          <div className="add-project-modal-footer">
            <button onClick={closeModal} type="button" className="add-project-cancel-btn">
              Cancel
            </button>

            <button type="submit" className="add-project-save-btn">
              <i className="ph ph-plus"></i>
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
