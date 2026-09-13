import React, { useRef, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase.js";
import { uploadImage } from "../cloudinary/cloudinary.js";

const AddSkillModal = ({ isAddSkillModalOpen, setIsAddSkillModalOpen }) => {
  const fileInput = useRef();
  const [skillName, setSkillName] = useState("");
  const [skillImage, setSkillImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    setSkillName("");
    fileInput.current.value = "";
    setIsAddSkillModalOpen(false);
  };

  const addskill = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = await uploadImage(skillImage)

    await addDoc(collection(db, "skills"), {
      name: skillName,
      image: imageUrl,
      createdAt: serverTimestamp()
    });

    setLoading(false);
    closeModal()
  };

  return (
    <div
      className={`add-skill-modal-container ${isAddSkillModalOpen ? "active" : ""}`}
    >
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

          <button
            disabled={loading ? true : false}
            onClick={closeModal}
            className="add-skill-modal-close"
          >
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="add-skill-modal-line"></div>

        <form className="add-skill-form" onSubmit={addskill}>
          <div className="add-skill-input-group">
            <label>Skill Name</label>

            <div className="add-skill-input-wrapper">
              <i className="ph ph-text-aa"></i>
              <input
                onChange={(e) => setSkillName(e.target.value)}
                value={skillName}
                type="text"
                placeholder="e.g. HTML, React, Node.js"
                required
              />
            </div>
          </div>

          <div className="add-skill-input-group">
            <label>Skill Image/Icon</label>

            <div className="add-skill-input-wrapper">
              <i className="ph ph-image"></i>
              <input
                onChange={(e) => setSkillImage(e.target.files[0])}
                ref={fileInput}
                type="file"
                accept="image/*"
                required
              />
            </div>
          </div>

          <div className="add-skill-modal-footer">
            <button
              disabled={loading ? true : false}
              onClick={closeModal}
              type="button"
              className="add-skill-cancel-btn"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading ? true : false}
              className="add-skill-save-btn"
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                <i className="ph ph-plus"></i>
              )}
              {loading ? "Adding Skill" : "Add Skill"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkillModal;
