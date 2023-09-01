import './AboutOffer.scss'
import Item from './Item'
import { data } from './data'

function AboutOffer(){
    return (
        <div className='about_offer'>
            {data.map(item => <Item key={item.id} icon={item.icon} title={item.title} text={item.text} />)}
        </div>
    )
}

export default AboutOffer