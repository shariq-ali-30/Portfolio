import React, { useState } from "react";
import Login from "../components/Login";
import AddProjectModal from "../components/AddProjectModal";
import AddSkillModal from "../components/AddSkillModal";

const Admin = () => {
  const [user, setUser] = useState(true);
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isAddSkillModalOpen, setIsAddSkillModalOpen] = useState(false);

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
                        Projects <span>(12)</span>
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

                <div className="admin-project-row">
                  <div className="admin-project-image">
                    <img  />
                  </div>

                  <div className="admin-project-info">
                    <h3>Personal Portfolio</h3>

                    <div className="admin-techs">
                      <span className="admin-tech html">HTML</span>
                      <span className="admin-tech css">CSS</span>
                      <span className="admin-tech javascript">JavaScript</span>
                    </div>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-project-row">
                  <div className="admin-project-image">
                    <img  />
                  </div>

                  <div className="admin-project-info">
                    <h3>Personal Portfolio</h3>

                    <div className="admin-techs">
                      <span className="admin-tech html">HTML</span>
                      <span className="admin-tech css">CSS</span>
                      <span className="admin-tech javascript">JavaScript</span>
                    </div>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-project-row">
                  <div className="admin-project-image">
                    <img  />
                  </div>

                  <div className="admin-project-info">
                    <h3>Personal Portfolio</h3>

                    <div className="admin-techs">
                      <span className="admin-tech html">HTML</span>
                      <span className="admin-tech css">CSS</span>
                      <span className="admin-tech javascript">JavaScript</span>
                    </div>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-project-row">
                  <div className="admin-project-image">
                    <img  />
                  </div>

                  <div className="admin-project-info">
                    <h3>Personal Portfolio</h3>

                    <div className="admin-techs">
                      <span className="admin-tech html">HTML</span>
                      <span className="admin-tech css">CSS</span>
                      <span className="admin-tech javascript">JavaScript</span>
                    </div>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
              </section>

              <section className="admin-card">
                <div className="admin-card-header">
                  <div className="admin-heading">
                    <div className="admin-heading-icon skill">
                      <i className="ph-fill ph-lightning"></i>
                    </div>

                    <div>
                      <h2>
                        Skills <span>(18)</span>
                      </h2>
                    </div>
                  </div>

                  <button onClick={() => setIsAddSkillModalOpen(true)} className="admin-add-btn">
                    <i className="fa-solid fa-plus"></i>
                    Add Skill
                  </button>
                </div>

                <div className="admin-line"></div>

                <div className="admin-skill-row">
                  <div className="admin-skill-info">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr88WhLiqkoCLihuPB7ulP9mSRwatIjk5tbWwRkWwWqYRM57gxEYoTVg&s=10"
                      height={30}
                    />

                    <h3>HTML</h3>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-skill-row">
                  <div className="admin-skill-info">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr88WhLiqkoCLihuPB7ulP9mSRwatIjk5tbWwRkWwWqYRM57gxEYoTVg&s=10"
                      height={30}
                    />

                    <h3>HTML</h3>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-skill-row">
                  <div className="admin-skill-info">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr88WhLiqkoCLihuPB7ulP9mSRwatIjk5tbWwRkWwWqYRM57gxEYoTVg&s=10"
                      height={30}
                    />

                    <h3>HTML</h3>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-skill-row">
                  <div className="admin-skill-info">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr88WhLiqkoCLihuPB7ulP9mSRwatIjk5tbWwRkWwWqYRM57gxEYoTVg&s=10"
                      height={30}
                    />

                    <h3>HTML</h3>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-skill-row">
                  <div className="admin-skill-info">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr88WhLiqkoCLihuPB7ulP9mSRwatIjk5tbWwRkWwWqYRM57gxEYoTVg&s=10"
                      height={30}
                    />

                    <h3>HTML</h3>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="admin-skill-row">
                  <div className="admin-skill-info">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORr88WhLiqkoCLihuPB7ulP9mSRwatIjk5tbWwRkWwWqYRM57gxEYoTVg&s=10"
                      height={30}
                    />

                    <h3>HTML</h3>
                  </div>

                  <div className="admin-actions">
                    <button className="admin-action edit">
                      <i className="ph ph-pencil-simple"></i>
                    </button>

                    <button className="admin-action delete">
                      <i className="ph ph-trash"></i>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <AddProjectModal
          isAddProjectModalOpen={isAddProjectModalOpen}
            setIsAddProjectModalOpen={setIsAddProjectModalOpen}
          />
          <AddSkillModal
          isAddSkillModalOpen={isAddSkillModalOpen}
            setIsAddSkillModalOpen={setIsAddSkillModalOpen}
          />
        </main>
      )}
    </>
  );
};

export default Admin;
