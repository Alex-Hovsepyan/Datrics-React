import Title from '../../Title/Title'
import './FAQContent.scss'
import Item from './Item'
import { data3 } from './data'

function FAQContent(){
    const left_data = data3.filter(item => item.id % 2 != 0)
    const right_data = data3.filter(item => item.id % 2 == 0)
    return (
        <div className='FAQ_container'>
            <Title title='Frequently Asked Questions' subtitle1='Quickly morph client-centric results through performance based applications.' subtitle2='Proactively facilitate professional human capital for cutting-edge.' />
            <div className='FAQ_contents'>
                <div className='left'>
                    {left_data.map(item => <Item icon={item.icon} question={item.question} answer={item.answer} />)} 
                </div>
                <div className='right'>
                    {right_data.map(item => <Item icon={item.icon} question={item.question} answer={item.answer} />)} 
                </div>
            </div>
        </div>
    )
}

export default FAQContent