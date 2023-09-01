import './Thanks.scss'
import Title from '../Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'

function Thanks(){
    return (
        <section className='thanks'>
            <Title title='Thank You !' subtitle1="We will be in touch shortly. We're looking forward to your demo. If you" subtitle2='have any questions prior to your demo feel free to give us a call.' color1='#ffffff' color2='#ffffff' />
            <span><FontAwesomeIcon icon={faMobileScreen} />(612) 255-461</span>
            <Button title='Go to Homepage' width='170px' color='transparent' textcolor='#ffffff' border='solid 1px #ffffff' url='/'></Button>
        </section>
    )
}

export default Thanks