import Title from '../../Title/Title'
import Item from './Item'
import './Question.scss'
import { data } from './data'

function Question(){
    return (
        <section className='questions'>
            <Title title='Frequently Asked Questions' subtitle1='Quickly morph client-centric results through performance based applications.' subtitle2='Proactively facilitate professional human capital for cutting-edge.' />
            <div className='questions_container'>
                <div className='left'>
                    {data.slice(0, data.length / 2).map(item => <Item question={item.question} answer={item.answer} />)}
                </div>
                <div className='right'>
                    {data.slice(data.length / 2, data.length).map(item => <Item question={item.question} answer={item.answer} />)}
                </div>
            </div>
        </section>
    )
}

export default Question