import React, { useEffect, useRef, useState } from "react";
import { uploadImage } from "../cloudinary/cloudinary";
import { db } from "../Firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const AddProjectModal = ({
  isAddProjectModalOpen,
  setIsAddProjectModalOpen,
  editProject,
  setEditProject,
}) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    githubLink: "",
    liveLink: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [projectImage, setProjectImage] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [technologyInput, setTechnologyInput] = useState("");

  const [loading, setLoading] = useState(false);
  const imageRef = useRef();
  const technologyRef = useRef();

  const addTechnologies = () => {
    const techArr = technologyInput.trim().split(/\s+/);

    if (!technologyInput.trim()) {
      return;
    }

    setTechnologies((prev) => [...prev, ...techArr]);
    setTechnologyInput("");
  };

  const removeTechnologies = (techName) => {
    setTechnologies(
      technologies.filter(
        (tech) => tech.toLowerCase().trim() != techName.toLowerCase().trim(),
      ),
    );
  };

  const addProject = async (e) => {
    e.preventDefault();
    if (!technologies.length) {
      return technologyRef.current.focus();
    }
    setLoading(true);

    if (editProject) {
      let docRef = doc(db, "projects", editProject.id);
      let imageUrl = editProject.image;

      if (projectImage) {
        imageUrl = await uploadImage(projectImage);
      }

      await updateDoc(docRef, {
        name: form.name.trim(),
        description: form.description.trim(),
        image: imageUrl,
        githubLink: form.githubLink.trim(),
        liveLink: form.liveLink.trim(),
        technologies: technologies,
        featured: isFeatured,
      });

      setEditProject(null);
      setLoading(false);
      closeModal();

      return;
    }

    let imageUrl = await uploadImage(projectImage);

    await addDoc(collection(db, "projects"), {
      name: form.name.trim(),
      description: form.description.trim(),
      image: imageUrl,
      githubLink: form.githubLink.trim(),
      liveLink: form.liveLink.trim(),
      technologies: technologies,
      featured: isFeatured,
      createdAt: serverTimestamp(),
    });
    setLoading(false);
    closeModal();
  };

  const closeModal = () => {
    setIsAddProjectModalOpen(false);
    setTimeout(() => {
      setForm({
        name: "",
        description: "",
        githubLink: "",
        liveLink: "",
      });
      imageRef.current.value = "";
      setTechnologies([]);
      setIsFeatured(false);
      setEditProject(null);
      setEditProject(null);
    }, 500);
  };

  useEffect(() => {
    if (editProject) {
      setForm({
        name: editProject.name,
        description: editProject.description,
        githubLink: editProject.githubLink,
        liveLink: editProject.liveLink,
      });
      setIsFeatured(editProject.featured);
      setTechnologies(editProject.technologies);
    }
  }, [editProject]);

  return (
    <div
      className={`add-project-modal-container ${isAddProjectModalOpen ? "active" : ""}`}
    >
      <div className="add-project-modal">
        <div className="add-project-modal-header">
          <div>
            <div className="add-project-modal-title">
              <div className="add-project-modal-icon">
                <i className="ph-fill ph-briefcase"></i>
              </div>

              <div>
                <h2>{editProject ? "Edit Project" : "Add Project"}</h2>
                <p>
                  {editProject
                    ? "Update your project information"
                    : "Create a new project for your portfolio"}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={closeModal}
            disabled={loading ? true : false}
            className="add-project-modal-close"
          >
            <i className="ph ph-x"></i>
          </button>
        </div>

        <div className="add-project-modal-line"></div>

        <form onSubmit={addProject} className="add-project-form">
          <div className="add-project-input-group">
            <label>Project Name</label>

            <div className="add-project-input-wrapper">
              <i className="ph ph-text-aa"></i>
              <input
                required
                autoComplete="off"
                disabled={loading ? true : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                name="name"
                value={form.name}
                type="text"
                placeholder="Enter project name"
              />
            </div>
          </div>

          <div className="add-project-input-group">
            <label>Description</label>

            <div className="add-project-input-wrapper textarea-wrapper">
              <i className="ph ph-align-left"></i>

              <textarea
                required
                autoComplete="off"
                disabled={loading ? true : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                name="description"
                value={form.description}
                placeholder="Enter project description"
                rows="4"
              ></textarea>
            </div>
          </div>

          <div className="add-project-input-group">
            <label>Project Image</label>

            <div className="add-project-input-wrapper">
              <i className="ph ph-image"></i>
              <input
                required={!editProject}
                disabled={loading ? true : false}
                ref={imageRef}
                onChange={(e) => setProjectImage(e.target.files[0])}
                type="file"
                accept="image/*"
              />
            </div>
          </div>

          <div className="add-project-input-row">
            <div className="add-project-input-group">
              <label>GitHub Link</label>

              <div className="add-project-input-wrapper">
                <i className="ph ph-github-logo"></i>
                <input
                  required
                  autoComplete="off"
                  disabled={loading ? true : false}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  name="githubLink"
                  value={form.githubLink}
                  type="text"
                  placeholder="GitHub repository URL"
                />
              </div>
            </div>

            <div className="add-project-input-group">
              <label>Live Link</label>

              <div className="add-project-input-wrapper">
                <i className="ph ph-globe"></i>
                <input
                  required
                  autoComplete="off"
                  disabled={loading ? true : false}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  name="liveLink"
                  value={form.liveLink}
                  type="text"
                  placeholder="Live project URL"
                />
              </div>
            </div>
          </div>

          <div className="add-project-input-group">
            <label>Technologies</label>

            <div className="add-project-tech-input">
              <div className="add-project-input-wrapper">
                <i className="ph ph-code"></i>

                <input
                  ref={technologyRef}
                  disabled={loading ? true : false}
                  onChange={(e) => setTechnologyInput(e.target.value)}
                  value={technologyInput}
                  type="text"
                  placeholder="Add technology"
                />

                <button
                  onClick={addTechnologies}
                  type="button"
                  className="add-tech-btn"
                >
                  <i className="ph ph-plus"></i>
                </button>
              </div>

              <div className="selected-technologies">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`admin-tech ${tech.toLowerCase().replace(" ", "-")}`}
                  >
                    {tech}
                    <i
                      onClick={() => removeTechnologies(tech)}
                      className="ph ph-x"
                    ></i>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="add-project-featured">
            <label className="featured-checkbox">
              <input
                disabled={loading ? true : false}
                onChange={() => setIsFeatured(!isFeatured)}
                type="checkbox"
                checked={isFeatured}
              />

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
            <button
              disabled={loading ? true : false}
              onClick={closeModal}
              type="button"
              className="add-project-cancel-btn"
            >
              Cancel
            </button>

            <button
              disabled={loading ? true : false}
              type="submit"
              className="add-project-save-btn"
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                <i className={`ph ph-${editProject ? "check" : "plus"}`}></i>
              )}
              {loading
                ? editProject
                  ? "Updating Project"
                  : "Adding Project"
                : editProject
                  ? "Update Project"
                  : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
