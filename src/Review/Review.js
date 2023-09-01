import SubHeader from '../SubHeader/SubHeader'
import './Review.scss'
import ReviewContent from './ReviewContent/ReviewContent'

function Review(){
    return (
        <section className='review'>
            <SubHeader title='Reviews' subtitle='Customer Say About Us' />
            <ReviewContent />
        </section>
    )
}

export default Review