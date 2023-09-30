import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter10 from "../assets/img/meter 10.svg";
import meter70 from "../assets/img/meter 70.svg";
import meter80 from "../assets/img/meter 80.svg";
import meter95 from "../assets/img/meter 95.svg";
import meter20 from "../assets/img/meter 20.svg";
import meter90 from "../assets/img/meter 90.svg";
import meter50 from "../assets/img/meter 50.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Мои навыки</h2>
                        <p>Сдесь собрана вся статистика моих навыков и знаний.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Веб разработка</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Веб дизайн</h5>
                            </div>
                            <div className="item">
                                <img src={meter50} alt="Image" />
                                <h5>ReacJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>JaveScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Golang</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="Image" />
                                <h5>Scss</h5>
                            </div>
                            <div className="item">
                                <img src={meter20} alt="Image" />
                                <h5>Jquery</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
