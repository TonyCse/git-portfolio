import { useState, useEffect } from "react";
import Link from "../components/Link";
import List from "../components/List";
import './Projects.css';

function Projects({ userName }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}/repos`
        );
        const result = await response.json();
        if (result) {
          setProjects(result);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userName]);

  return (
    <div className="Projects-container">
      <h2>Projects</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              value:  <Link url={`/projects/${project.name}`} title={project.name}>
            </Link>,
            }))}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;