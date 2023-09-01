import Item from './Item';
import './BestServices.scss';
import { data2 } from './data';
import { Link } from 'react-router-dom';

function BestServices(){
    return (
        <section className='best_services'>
            <div className='title'>
                <h1>We Provide Best Services</h1>
                <p>Efficiently aggregate end-to-end core competencies without maintainable ideas.</p>
                <p>Dynamically foster tactical solutions without enabled value.</p>
            </div>
            <div className='best_services_container'>
                {data2.map((item) => <Link to={`/service/${item.slug}`}><Item key={item.id} icon={item.images[0]} title={item.title} text={item.text} /></Link>)}
            </div>
        </section>
    )
}

export default BestServices