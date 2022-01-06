import React from "react";
import {Fade} from "react-reveal";
import Navigation from "../Navigation";
import Footer from "../Footer/Footer";
import {useLocation} from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import './ProjectDetails.css';
import Contact from "../Contact/Contact";

const ProjectDetails = () => {
  const location = useLocation();
  const { project } = location.state
  console.log(project.projectLink);

  return (
    <div className="touryst">
      <Navigation />

      <Fade top>
        <h1 className="textStyle">{project.title}</h1>

        <Image
          className="mt-4"
          src={project.image}
          alt="project sample"
          fluid
        />

        <Container className="align-left">
          <h2 className="mt-5">Description</h2>
          <p>{project.brief}</p>
        </Container>

        <Container className="align-left">
          <h2>Role</h2>
          <p>{project.role}</p>
        </Container>

        <Container className="align-left">
          <h2>Stack</h2>
          {
            project.techStack.map((tech, index) =>
              <ul>
                <li key={index}>{tech}</li>
              </ul>
            )
          }
        </Container>

          <Container className="align-left">
            <h2 className="mt-4">Link</h2>
            <a
              className="link-deco"
              href={project.projectLink.to}
              target="_blank" rel="noreferrer"
            >
              {project.projectLink.text}
            </a>
        </Container>
      </Fade>

      <Contact />
      <Footer />
    </div>
  );
}

export default ProjectDetails;
