import SubHeader from '../SubHeader/SubHeader';
import Title from '../Title/Title';
import './Project.scss';
import ProjectContent from './ProjectContent/ProjectContent';
import ProjectContact from './ProjectContact/ProjectContact';
import Pricing from './Pricing/Pricing';
import Testimonial from './Testimonial/Testimonial';


function Project(){
    return (
        <section className='project'>
            <SubHeader title='Our Projects' subtitle='Best Projects in the World' />
            <Title title='Check Our Quality Work' subtitle1='Dynamically pursue reliable convergence rather than 24/7 process improvements.' subtitle2='Intrinsicly develop end-to-end customer service without extensive data.' />
            <ProjectContent />
            <ProjectContact />
            <Pricing />
            <Testimonial />
        </section>
    )
}

export default Project;





