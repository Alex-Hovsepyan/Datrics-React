import Title from '../../Title/Title'
import './Company.scss'
import { data } from '../../About/UserOpinion/UserOpinionContent/data'
import Item2 from '../../About/UserOpinion/UserOpinionContent/Item2'

function Company(){
    return (
        <section className='company'>
            <Title title='Increase More Traffic Your Business?' subtitle1='Credibly redefine high-payoff web services after holistic experiences. Globally' subtitle2='harness multidisciplinary solutions vis-a-vis intuitive customer service.' color1='#ffffff' color2='#ffffff' />
            <div className='company_container'>
                {data.map(item => <Item2 icon={item.icon} count={item.count} title={item.title} />)}
            </div>
        </section>
    )
}

export default Company