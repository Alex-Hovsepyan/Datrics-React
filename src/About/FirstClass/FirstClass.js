import './FirstClass.scss'
import Title from '../../Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import ButtonPlay from '../../ButtonPlay/ButtonPlay'

function FirstClass(){
    return (
        <section className='first_class'>
            <div className='first_class_container'>
                <div className='left'>
                    <Title title='First Class Business Solutions' subtitle1='Interactively develop timely niche markets before extensive imperatives. Professionally repurpose interoperable growth strategies before effective core competencies.' />
                    <ul>
                        <li><FontAwesomeIcon color='#162e66' icon={faSquareCheck} /> <strong>Cost </strong>Accounting Fundamentals</li>
                        <li><FontAwesomeIcon color='#162e66' icon={faSquareCheck} /> <strong>Corporate </strong>Accounting Fundamentals</li>
                        <li><FontAwesomeIcon color='#162e66' icon={faSquareCheck} /> <strong>SEO </strong>Optimization Services</li>
                        <li><FontAwesomeIcon color='#162e66' icon={faSquareCheck} /> <strong>Company </strong>Brand Solutions</li>
                    </ul>
                </div>
                <div className='right'>
                    <ButtonPlay />
                </div>
            </div>
        </section>
    )
}

export default  FirstClass