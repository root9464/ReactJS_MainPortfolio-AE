import { useState, useEffect } from "react";
import { Col, Row, Alert, Container } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import axios from "axios";
export const Prices = () => {
  const [data, setData] = useState([]);
    useEffect(() => {
       
        const db =
          [
            {
              title: "Standart",
              features: [
                  {
                    price: "500",
                    desc1:"Frontend сайт",
                    desc2: "Оптимизированная работа",
                    desc3: "none",
                    
                  },]
            },
            {
              title: "Premium",
              features: [
                  {
                    price: "3500",
                    desc1: "FullStack сайт на ReactJs",
                    desc2: "Полный адаптив под устройства",
                    desc3: "Оптимизированная работа",
                  },
  
              ]
            },
            {
                title: "Vip",
                features: [
                    {
                      price: "1500",
                      desc1: "FullStack сайт",
                      desc2: "Полный адаптив под устройства",
                      desc3: "Оптимизированные работа",
                      
                    },
    
                ]
            },]

        setData(db);
        console.log(data)

    }, [])


          



    const card = (
      data.map((f, index) => {
       return   <>
             
 
                      <div className='pricing-item'>
 
                          <div className='pricing-deco'>
                        
                            <svg className='pricing-deco-img' enable-background='new 0 0 300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='0 0 300 100' width='300px' x='0px' xmlSpace='preserve' xmlnsXlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' y='0px'>
                              <path className='deco-layer deco-layer--1' d='M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z' fill='#FFFFFF' opacity='0.6'></path>
                              <path className='deco-layer deco-layer--2' d='M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z' fill='#FFFFFF' opacity='0.6'></path>
                              <path className='deco-layer deco-layer--3' d='M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z' fill='#FFFFFF' opacity='0.7'></path>
                              <path className='deco-layer deco-layer--4' d='M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z' fill='#FFFFFF'></path>
                            </svg>
              
                            {f.features.map((feature,index)=>{
                              return (
                                    <>
                                    <div className='pricing-price'><span className='pricing-currency'>$</span>{feature.price}
                                        <span className='pricing-period'>/ мес</span>
                                    </div>
                                    <h3 className='pricing-title'>{f.title}</h3>
                                  </>
                                  ) })}
                          </div >
                        
                          <Col>
                            <ul class='pricing-feature-list'>
                              {f.features.map((feature,index)=>{
                                return (
                                  <>
                                    <li className='pricing-feature'>{feature.desc1} </li>
                                    <li className='pricing-feature'>{feature.desc2} </li>
                                    <li className='pricing-feature'>{feature.desc3} </li>
                                  </>
                                )
                               
                              })}
                            </ul>
                          </Col>
 
                          <button className='pricing-action'>Сделать заказ</button>
 
                      </div>
 
              
 
          </>
      })
  )
 
     return (
       <TrackVisibility>
         {({ isVisible }) =>
           
           <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
           
           <section classNameName="price" id="price">
           <Container className='pricing pricing-palden'>
            
                 {card}
                 
            </Container>
            </section>
          </div>}
         
         
         </TrackVisibility>
   
     )
 
 }
 