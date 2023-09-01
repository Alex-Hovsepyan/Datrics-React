import SubHeader from '../SubHeader/SubHeader'
import FAQContent from './FAQContent/FAQContent'
import Question from './Question/Question'

function FAQ(){
    return (
        <section className='FAQ'>
            <SubHeader title='FAQ Page' subtitle='Get Your Questions Answers!' />
            <FAQContent />
            <Question />
        </section>
    )
}

export default FAQ