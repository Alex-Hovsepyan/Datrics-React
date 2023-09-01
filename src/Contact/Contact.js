import ServicesContact from '../Services/ServicesContact/ServicesContact'
import SubHeader from '../SubHeader/SubHeader'
import './Contact.scss'
import Item from './Item'
import { data } from './data'

function Contact(){
    return (
        <section className='contact'>
            <SubHeader title='Contact Us' subtitle='Get in Touch Now!' />
            <div className='contact_container'>
                {data.map(item => <Item key={item.id} icon={item.icon} title={item.title} subtitle={item.subtitle} />)}
            </div>
            <ServicesContact />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12193.253677151753!2d44.5081773119702!3d40.179837919431755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0bf2cbb0e3%3A0x4c9613864c125c1d!2sSuperAnnotate!5e0!3m2!1shy!2sam!4v1692451941212!5m2!1shy!2sam" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}

export default Contact