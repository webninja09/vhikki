import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chat API",
      description: "Real-time messaging solution",
      imgUrl: projImg1,
      linkUrl: "https://github.com/shabnamislam/ChatAPI",
    },
    {
      title: "Desktop Assistant",
      description: "Voice-activated personal assistant",
      imgUrl: projImg2,
      linkUrl: "https://github.com/shabnamislam/DesktopAssistant",
    },
    {
      title: "Discord Bot",
      description: "Customizable automation tool",
      imgUrl: projImg3,
      linkUrl: "https://github.com/shabnamislam/DiscordBot",
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={0}md={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                <h2>Projects</h2>
                <p>Anhdyrd budhc icy ddyfdq hdf  dhdd gdbdee hdfgvyfc jvhgb.</p>
                <Row>
  {projects.map((project, index) => {
    return (
      <Col key={index} xs={6} sm={6} md={6} lg={6} xl={6}>
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
          <ProjectCard {...project} />
        </a>
      </Col>
    );
  })}
</Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}