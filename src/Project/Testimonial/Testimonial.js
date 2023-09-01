import Title from '../../Title/Title'
import Item from './Item'
import './Testimonial.scss'
import { data } from './data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ClientLogo from '../../Services/ClientLogo/ClientLogo'

function Testimonial(){
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
          },
        ]
      
      };
    return(
        <section className='testimonial'>
            <Title title='Testimonials What Clients Say' subtitle1='Rapidiously morph transparent internal or "organic" sources whereas resource' subtitle2='sucking e-business. Conveniently innovate compelling internal.' />
            <div className='testimonial_container'>
                <Slider {...settings}>
                    {data.map(item => <Item key={item.id} text={item.text} stars={item.stars} img={item.img} name={item.name} country={item.country} />)}
                </Slider>
            </div>
            <ClientLogo />
        </section>
    )
}

export default Testimonial