import { faClock, faSquareCheck, faUser } from '@fortawesome/free-regular-svg-icons'
import Item from './Item'
import './ProjectDetail.scss'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubHeader from '../SubHeader/SubHeader'
import { useParams } from 'react-router-dom'
import { data } from '../Project/ProjectContent/data'

function ProjectDetail(){
    const { proSlug } = useParams();
    const project = data.find(item => item.slug == proSlug)

    return (
        <>
            <SubHeader title='Project Details' subtitle='Get Some Information About The Project' />
            <section className='project_detail'>
                <div className='project_detail_container'>
                    <div className='detail_info_container'>
                        <img src={project.img} />
                        <div className='detail_info'>
                            <Item icon={faUser} title='Company Name' info={project.name} />
                            <Item icon={faClock} title='Project Duration' info={project.duration} />
                            <Item icon={faLink} title='Project Address' info={project.address} />
                        </div>
                    </div>
                    <div className='description'>
                        <h3>Project Description</h3>
                        <p>{project.text1}</p>
                        <p>{project.text2}</p>
                        <p>{project.text3}</p>
                    </div>
                    <div className='offers'>
                        <div className='left'>
                            <ul>
                                {project.services.slice(0, project.services.length / 2).map(i => <li><FontAwesomeIcon icon={faSquareCheck} /><strong>{i[0]} </strong>{i[1]}</li>)}
                            </ul>
                        </div>
                        <div className='right'>
                            <ul>
                                {project.services.slice(project.services.length / 2, project.services.length).map(i => <li><FontAwesomeIcon icon={faSquareCheck} /><strong>{i[0]} </strong>{i[1]}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectDetail