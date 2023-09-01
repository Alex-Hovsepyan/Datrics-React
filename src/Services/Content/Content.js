import './Content.scss';
import Item from './Item';
import { data } from './data';

function Content(){
    return (
        <section className='services'>
            <div className='services_container'>
                {data.map((item) => <Item key={item.id} background={item.background} title={item.title} text={item.text} img={item.img} />)}
            </div>
        </section>
    )
}

export default Content