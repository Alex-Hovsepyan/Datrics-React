import './HomeContent.scss'
import Item from './Item'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

function HomeContent(){
    return (
        <div className='home_container'>
            <Item icon={faChartPie} title='Data Analytics' text='Dramatically incentivize mission-critical process improvements through extensive benefits. Interactively visualize B2C e-markets with standards compliant e-commerce.' color='#ff6492' />
            <Item icon={faClock} title='Digital Automation' text='Conveniently synergize worldwide functionalities via global e-commerce. Distinctively actualize standards compliant experiences before real-time human capital.' color='#1351a8' border='solid 1px #1351a8' />
        </div>
    )
}

export default HomeContent