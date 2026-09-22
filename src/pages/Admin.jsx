import React, { useContext, useState } from "react";
import Login from "../components/Login";
import AddProjectModal from "../components/AddProjectModal";
import AddSkillModal from "../components/AddSkillModal";
import { DataContext } from "../context/DataContext";
import { db } from "../Firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useState(false);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isAddSkillModalOpen, setIsAddSkillModalOpen] = useState(false);
  const [skills, projects] = useContext(DataContext);
  const [editSkill, setEditSkill] = useState(null);
  const [editProject, setEditProject] = useState(null);

  const deleteSkill = async (id) => {
    await deleteDoc(doc(db, "skills", id));
  };

  const deleteProject = async (id) => {
    await deleteDoc(doc(db, "projects", id));
  };

  return (
    <>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <main className="admin-page">
          <div className="admin-container">
            <div className="admin-content">
              <section className="admin-card">
                <div className="admin-card-header">
                  <div className="admin-heading">
                    <div className="admin-heading-icon">
                      <i className="ph-fill ph-briefcase"></i>
                    </div>

                    <div>
                      <h2>
                        Projects <span>({projects.length})</span>
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsAddProjectModalOpen(true)}
                    className="admin-add-btn"
                  >
                    <i className="fa-solid fa-plus"></i>
                    Add Project
                  </button>
                </div>

                <div className="admin-line"></div>

                {projects?.map((project, idx) => (
                  <div key={idx} className="admin-project-row">
                    <div className="admin-project-image">
                      <a target="_blank" href={project.githubLink}>
                        <img src={project.image} />
                      </a>
                    </div>

                    <div className="admin-project-info">
                      <h3>{project.name}</h3>

                      <div className="admin-techs">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`admin-tech ${tech.toLowerCase().replace(" ", "-")}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="admin-actions">
                      <button
                        onClick={() => {
                          setEditProject(project);
                          setIsAddProjectModalOpen(true);
                        }}
                        className="admin-action edit"
                      >
                        <i className="ph ph-pencil-simple"></i>
                      </button>

                      <button
                        onClick={() => deleteProject(project.id)}
                        className="admin-action delete"
                      >
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </section>

              <section className="admin-card">
                <div className="admin-card-header">
                  <div className="admin-heading">
                    <div className="admin-heading-icon skill">
                      <i className="ph-fill ph-lightning"></i>
                    </div>

                    <div>
                      <h2>
                        Skills <span>({skills.length})</span>
                      </h2>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsAddSkillModalOpen(true)}
                    className="admin-add-btn"
                  >
                    <i className="fa-solid fa-plus"></i>
                    Add Skill
                  </button>
                </div>

                <div className="admin-line"></div>

                {skills?.map((skill, idx) => (
                  <div className="admin-skill-row" key={idx}>
                    <div className="admin-skill-info">
                      <img src={skill.image} height={30} />

                      <h3>{skill.name}</h3>
                    </div>

                    <div className="admin-actions">
                      <button
                        onClick={() => {
                          setEditSkill(skill);
                          setIsAddSkillModalOpen(true);
                        }}
                        className="admin-action edit"
                      >
                        <i className="ph ph-pencil-simple"></i>
                      </button>

                      <button
                        className="admin-action delete"
                        onClick={() => deleteSkill(skill.id)}
                      >
                        <i className="ph ph-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
          <AddProjectModal
            isAddProjectModalOpen={isAddProjectModalOpen}
            setIsAddProjectModalOpen={setIsAddProjectModalOpen}
            editProject={editProject}
            setEditProject={setEditProject}
          />
          <AddSkillModal
            isAddSkillModalOpen={isAddSkillModalOpen}
            setIsAddSkillModalOpen={setIsAddSkillModalOpen}
            editSkill={editSkill}
            setEditSkill={setEditSkill}
          />
        </main>
      )}
    </>
  );
};

export default Admin;
