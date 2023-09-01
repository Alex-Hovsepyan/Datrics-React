import Title from '../../Title/Title'
import Item from './Item'
import './Pricing.scss'
import { data } from './data'

function Pricing(){
    return (
        <section className="pricing">
            <Title title='Affordable Pricing and Packages' subtitle1='Efficiently aggregate end-to-end core competencies without maintainable ideas.' subtitle2='Dynamically foster tactical solutions without enabled value.' />
            <div className='pricing_container'>
                {data.map(item => <Item key={item.id} title={item.title} img={item.img} price={item.price} offers={item.offers} />)}
            </div>
        </section>
    )
}

export default Pricing