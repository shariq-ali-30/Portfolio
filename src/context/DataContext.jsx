import React, { createContext, useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  function getSkills() {
    return onSnapshot(collection(db, "skills"), (querySnapshot) => {
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
    return onSnapshot(collection(db, "projects"), (querySnapshot) => {
      const projectsList = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setProjects(projectsList);
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
    <DataContext.Provider value={[skills, projects]}>
      {children}
    </DataContext.Provider>
  );
};
