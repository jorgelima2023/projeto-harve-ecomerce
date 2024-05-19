import Carousel from 'react-bootstrap/Carousel';
import "../assets/css/carousel.css";

  function CarouselComponentes() {
    return (
        <div className='container'>
            <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/4683/banner_img.jpg&w=1920&h=400&q=100"
                // alt="First slide"
                />
                {/* <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/4724/banner_img.jpg&w=1920&h=400&q=100"
                // alt="Second slide"
                />
                {/* <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.kabum.com.br/core/_next/image?url=https://themes.kabum.com.br/conteudo/layout/4721/banner_img.jpg&w=1920&h=400&q=100"
                // alt="Third slide"
                />
                {/* <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            </Carousel>
        </div>
      );
  }
  export { CarouselComponentes };
