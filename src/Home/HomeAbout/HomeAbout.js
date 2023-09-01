import './HomeAbout.scss'
import Title from '../../Title/Title'
import ButtonPlay from '../../ButtonPlay/ButtonPlay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

function HomeAbout(){
    function active_category(e){
        const active_category = document.querySelector('.active_category')
        active_category.classList.remove('active_category')
        document.querySelector('.active_item').classList.remove('active_item')
        e.target.classList.add('active_category');
        document.querySelector(`div .${e.target.id}`).classList.add('active_item')
        
    }

    return (
        <section className='home_about'>
            <div className='home_about_container'>
                <div className='left'>
                    <ButtonPlay />
                </div>
                <div className='right'>
                    <Title title='About Us' subtitle1='Credibly grow multifunctional customer service through team driven scenarios. Rapidiously disintermediate end-to-end e-business after goal-oriented partnerships. Professionally incentivize scalable expertise before strategic intellectual.' />
                    <ul className='category'>
                        <li className='active_category' onClick={(e) => active_category(e)} id='history'>Our History</li>
                        <li onClick={(e) => active_category(e)} id='mission'>Our Mission</li>
                        <li onClick={(e) => active_category(e)} id='vision'>Our Vision</li>
                    </ul>
                    <div className='history active_item'>
                        <p>Objectively monetize resource sucking testing procedures vis-a-vis standards compliant ROI. Proactively disintermediate virtual sources before wireless alignments.</p>                        
                        <ul>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Creative </strong>Websites Design</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Accounting </strong>Procedures Guidebook</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Cost </strong>Accounting Fundamentalsn</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Corporate </strong>Cash Management</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>SEO </strong>Optimization Services</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Company </strong>Brand Solutions</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>45-Day </strong>Money-Back Guarantee</li>
                        </ul>
                    </div>
                    <div className='mission'>
                        <p>Proactively unleash orthogonal niches rather than interoperable opportunities. Dynamically engage 24/365 materials after high-payoff web services. Authoritatively foster diverse potentialities vis-a-vis excellent niches.</p>
                        <p>Monotonectally enhance interoperable paradigms via team building channels. Phosfluorescently predominate robust services with vertical content. Globally network viral innovation without prospective resources. Quickly.</p>
                        <p>Competently innovate turnkey channels after proactive methods of empowerment. Continually enhance orthogonal experiences via bricks-and-clicks potentialities. Energistically evisculate enterprise human capital without backward-compatible.</p>
                    </div>
                    <div className='vision'>
                        <p>Monotonectally enhance interoperable paradigms via team building channels. Phosfluorescently predominate robust services with vertical content. Globally network viral innovation without prospective resources. Quickly.</p>
                        <ul>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Cost </strong>Accounting Fundamentalsn</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Corporate </strong>Cash Management</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>SEO </strong>Optimization Services</li>
                            <li><FontAwesomeIcon style={{color : '#162e66', marginRight : '8px'}} icon={faAnglesRight} /><strong>Company </strong>Brand Solutions</li>
                        </ul>
                        <p>Competently innovate turnkey channels after proactive methods of empowerment. Continually enhance orthogonal experiences. Energistically evisculate enterprise human capital without backward-compatible.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout