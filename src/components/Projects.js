import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/banner-bg.png";
import projImg2 from "../assets/img/banner-bg.png";
import projImg3 from "../assets/img/none.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
 
  const projects = [
    {
      title: "iO",
      description: "Fullstack проект",
      imgUrl: projImg1,
    },
    {
      title: "aE",
      description: "ReactJS проект",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio by Tigra 3.0",
      description: "Портфолио по окончанию курса JavaScript",
      imgUrl: projImg1,
    },
    {
      title: "AI",
      description: "В скором будующем",
      imgUrl: projImg3,
    },
    {
      title: "none",
      description: "В далеком будующем",
      imgUrl: projImg3,
    },
    {
      title: "none",
      description: "В далеком будующем",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Проекты</h2>
                <p>Ниже представлено портфолио моих крупных проектов, которые как либо выделяются своим функционалом или анимацими )</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Стр 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Стр 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">История aE </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>в скором будующем...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                        а
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
