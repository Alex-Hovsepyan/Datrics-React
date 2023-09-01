import { useState } from 'react';
import Item from './Item';
import './ProjectContent.scss';
import { data } from './data';
import { Link } from 'react-router-dom';

function ProjectContent() {
    const [filter_data, setData] = useState(data);

    function active(e) {
        const active_btn = document.querySelector('.active_btn');
        active_btn.classList.remove('active_btn');
        e.target.classList.add('active_btn');
    }

    return (
        <>
            <div className='buttons'>
                <button className='active_btn' onClick={(e) => { setData(data); active(e); }}>All</button>
                <button onClick={(e) => { setData(data.filter(item => item.type === 'branding')); active(e); }}>Branding</button>
                <button onClick={(e) => { setData(data.filter(item => item.type === 'animation')); active(e); }}>Animation</button>
                <button onClick={(e) => { setData(data.filter(item => item.type === 'others')); active(e); }}>Others</button>
            </div>
            <div className="project_container">
                {filter_data.map(item => <Link to={`/project/${item.slug}`}><Item key={item.id} title={item.title} subtitle={item.subtitle} img={item.img} /></Link>)}
            </div>
        </>
    );
}

export default ProjectContent;
