import './UserOpinionContent.scss'
import Slider from "react-slick";
import { data } from '../../../Project/Testimonial/data';
import { data as data2 } from './data';
import Item from '../../../Review/ReviewContent/Item';
import Item2 from './Item2';
    
function UserOpinionContent(){
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };

    return (
        <div className='user_opinion_container'>
            <div className='left'>
                <Slider {...settings}>
                    {data.map(item => <Item text={item.text} img={item.img} name={item.name} country={item.country} />)}
                </Slider>
            </div>
            <div className='right'>
                {data2.map(item => <Item2 icon={item.icon} count={item.count} title={item.title} />)}
            </div>
        </div>
    )
}

export default UserOpinionContent