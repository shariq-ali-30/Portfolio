import React, { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  function getSkills() {
    const skillsQuery = query(
      collection(db, "skills"),
      orderBy("createdAt", "asc"),
    );
    return onSnapshot(skillsQuery, (querySnapshot) => {
      const skillsList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setSkills(skillsList);
    });
  }

  function getProjects() {
    setLoadingProjects(true);

    const projectsQuery = query(
      collection(db, "projects"),
      orderBy("createdAt", "desc"),
    );

    return onSnapshot(projectsQuery, (querySnapshot) => {
      const projectsList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProjects(projectsList);
      setLoadingProjects(false);
    });
  }

  useEffect(() => {
    const unsubSkills = getSkills();
    const unsubProjects = getProjects();

    return () => {
      unsubSkills();
      unsubProjects();
    };
  }, []);

  return (
    <DataContext.Provider
      value={[
        skills,
        projects,
        loadingProjects,
      ]}
    >
      {children}
    </DataContext.Provider>
  );
};
