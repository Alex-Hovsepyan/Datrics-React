import './ServicesContact.scss';
import Button from '../../Button/Button';

function ServicesContact(){
    return (
        <section className='services_contact'>
            <div className='services_contact_container'>
                <div className='left'>
                    <h3>Ready to get started?</h3>
                    <form method='post'>
                        <input name="name" placeholder='Enter Name' required />
                        <input type='email' name="email" placeholder='Enter email' required />
                        <textarea name='message' placeholder='Message' required></textarea>
                        <Button title='Send Message' color='#1351A8' width='158px' />
                    </form>
                </div>
                <div className='right'>
                    <div className='title'>
                        <h1>Looking for a excellent Business idea?</h1>
                        <p>Seamlessly deliver pandemic e-services and next-generation initiatives.</p>
                        <Button title='Get Directions' color='transparent' width='182px' border='solid 1px #162E66' textcolor='#162E66' />
                    </div>
                    <div className='info'>
                        <h5>Our Headquarters</h5>
                        <div className='info_content'>
                            <p>100 yellow house, Mn</p>
                            <p>Factory, United State, 13420</p>
                        </div>
                        <div className='info_content'>
                            <p>Phone: +1234567890123</p>
                            <p>Email: <a href="mailto:alextyoou@gmail.com">alextyoou@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesContact