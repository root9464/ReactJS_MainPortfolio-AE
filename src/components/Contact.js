import { useState, createContext, useMemo } from "react";
import { Container, Row, Col, Nav,Tab } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import axios from "axios";
import TrackVisibility from 'react-on-screen';
export const Contact = () => {

  const formInitialDetails = {
    name: '',
    surname: '',
    phone: '',
    password: '',
    email: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
} 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formDetails)
    axios.post(`http://localhost:5000/api/register/`, {formDetails}).then((resp) => {
      console.log(resp);
      console.log(resp.data);
      console.log(formDetails);
    });
  };
  //читать про куки и сессия либо контекст читать
  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login/`, {formDetails}).then((resp) => {

      if (resp.status === 200) {
        console.log(resp.data === true);
        setIsLoading(true)
      }
      else{console.log("error");}
    });
    
  }
  useMemo(() => {

    console.log(isLoading)
  }, [isLoading])


  return (
    
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            {isLoading
            ? <div></div>
            :
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2>Регистрация</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="authorization">
                <Nav variant="pills" > 
                  <Nav.Item>
                    <Nav.Link className="navcolor" eventKey="registration">Регистрация</Nav.Link>
                  </Nav.Item>
                    
                  <Nav.Item>
                    <Nav.Link className="navcolor" eventKey="authorization">Авторизация</Nav.Link>
                  </Nav.Item>
                </Nav> 
                  
                <Tab.Content>
                  {/* <Tab.Pane eventKey="registration">
                    <form onSubmit={handleSubmit} className="form">
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Имя" onChange={(e) => onFormUpdate('name', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.lasttName} placeholder="Фамилия" onChange={(e) => onFormUpdate('surname', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Телефон" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.password} placeholder="Пароль" onChange={(e) => onFormUpdate('password', e.target.value)} />
                            </Col>
                              
                        </Row>
                        <button className="button" type="submit" onClick={formDetails} >Зарегестрироваться</button>
                      </form>
                      
                    
                  </Tab.Pane> */}
                    
                  <Tab.Pane eventKey="authorization">
                    <form onSubmit={handleLogin} className="form">
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Телефон" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.password} placeholder="Пароль" onChange={(e) => onFormUpdate('password', e.target.value)} />
                            </Col>
                        </Row>
                        <button className="button" type="submit" onClick={handleLogin} >Авторизироваться</button>
                      </form>
                     
                  </Tab.Pane>
                </Tab.Content> 
               
                  
              </Tab.Container> 
            </div>} 
          </TrackVisibility>
            
          }
            
            

            
          </Col>
        </Row>
      </Container>
    </section>
   
  );
}
