import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import Link from "../components/Link";

function ProjectDetail({ userName }) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/repos/${userName}/${name}`
        );
        const result = await response.json();
        setProject(result);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userName, name]);

  return (
    <div className="Project-container">
      <h2>Project: {project ? project.name : "Not Found"}</h2>
      {loading ? (
        <span>Loading...</span>
      ) : project ? (
        <div>
          <p>Description: {project.description || "No description available."}</p>
          <p>Stars: {project.stargazers_count}</p>
          <p>
            <Link url={project.html_url} title="View on GitHub" />
          </p>
          <RouterLink to="/projects">Back to Projects</RouterLink>
        </div>
      ) : (
        <span>Project not found</span>
      )}
    </div>
  );
}

export default ProjectDetail;