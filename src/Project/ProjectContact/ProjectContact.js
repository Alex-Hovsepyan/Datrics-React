import Button from '../../Button/Button';
import Title from '../../Title/Title';
import './ProjectContact.scss';

function ProjectContact(){
    return (
        <section className='project_contact'>
            <div className='project_contact_container'>
                <Title title='Looking for Quality Services ?' subtitle1='Progressively deliver market-driven quality vectors rather than goal-oriented niche markets.' color1='#ffffff' color2='#ffffff' />
                <Button title='Contact Us Today' color='transparent' border='solid 1px' width='177.5px' />
            </div>
        </section>
    )
}

export default ProjectContact