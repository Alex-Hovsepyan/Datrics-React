import { data } from '../../Project/Testimonial/data'
import Item from './Item'
import './ReviewContent.scss'

function ReviewContent(){
    return (
        <div className='review_container'>
            {data.map(item => <Item text={item.text} img={item.img} name={item.name} country={item.country} />)}
        </div>
    )
}

export default ReviewContent