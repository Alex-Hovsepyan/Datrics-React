import Homepage from '../Homepage/Homepage';
import './Home.scss';
import background from '../Images/bg-shape.svg';
import img from '../Images/hero-single-img-3.svg';
import HomeContent from './HomeContent/HomeContent';
import HomeAbout from './HomeAbout/HomeAbout';
import BestServices from '../Services/BestServices/BestServices';
import Company from './Company/Company';
import WorkProcess from '../About/WorkProcess/WorkProcess'
import BlogContent from '../Blog/BlogContent/BlogContent';
import { data } from '../Blog/BlogContent/data';
import '../Blog/BlogContent/BlogContent.scss'

function FirstHome(){
    return (
        <>
            <Homepage background={background} subtitle='BUSINESS INTELLIGENCE' title='Big Data Analytics Company' 
                    text='Holisticly procrastinate mission-critical convergence with reliable customer service. Assertively underwhelm idea-sharing for impactful solutions.' 
                    btn='Get Start Now' btn_width='156px' btn_color='#1351A8' img1={img}
                    />
            <HomeContent />
            <HomeAbout />
            <BestServices />
            <Company />
            <WorkProcess />
            <BlogContent data={data.reverse().slice(0, 3)} display='flex' />
        </>
    )
}

export default FirstHome