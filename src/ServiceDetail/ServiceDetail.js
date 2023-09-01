import './ServiceDetail.scss'
import SubHeader from '../SubHeader/SubHeader'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import Button from '../Button/Button'
import { data3 } from '../FAQ/FAQContent/data'
import Item from '../FAQ/FAQContent/Item'
import { data2 } from '../Services/BestServices/data'

function ServiceDetail(){
    const { serviceSlug } = useParams()
    const service = data2.find(item => item.slug == serviceSlug)
    const difference_data = data3
    for (let i = difference_data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [difference_data[i], difference_data[j]] = [difference_data[j], difference_data[i]];
    }
    return (
        <>
            <SubHeader title='Services Details' subtitle='Learn More About Our Service' />
            <section className='service_details'>
                <div className='service_details_container'>
                    <div className='left'>
                        <img src={service.images[1]} />
                        <h2>Service Details</h2>
                        {service.texts.map(item => <p>{item}</p>)}
                        <div className='offers'>
                            <img src={service.images[2]} />
                            <ul>
                                {service.offers.map(item => <li><FontAwesomeIcon style={{marginRight : '12px', color : '#162e66'}} icon={faSquareCheck} /><strong>{item[0]} </strong>{item[1]}</li>)}
                            </ul>
                        </div>
                        {difference_data.sort(() => Math.random() - 0.5).slice(0, 3).map(item => <Item question={item.question} answer={item.answer} />)}
                    </div>
                    <div className='right'>
                        <h3>All Services</h3>
                        <ul>
                            {data2.filter(item => item.slug != serviceSlug).map(item => <li><Link to={`/service/${item.slug}`}>{item.title}</Link></li>)}
                        </ul>
                        <h3>Need Help?</h3>
                        <p>We are available in 24/7 hours for dedicated support</p>
                        <ul>
                            <li><FontAwesomeIcon style={{marginRight : '12px', color : '#162e66'}} icon={faLocationDot} />{service.address}</li>
                            <li><FontAwesomeIcon style={{marginRight : '12px', color : '#162e66'}} icon={faMobileScreen} />{service.phone}</li>
                            <li><FontAwesomeIcon style={{marginRight : '12px', color : '#162e66'}} icon={faEnvelope} />{service.email}</li>
                        </ul>
                        <h3>NewsLetter</h3>
                        <p>Enter your email address below to subscribe to my newsletter</p>
                        <form action='/' method='post'>
                            <input type="email" placeholder='name@yourmail.com' required/>
                            <Button title='Subscribe' width='100%' color='#1351A8' border='solid 1px #1351A8'></Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetail