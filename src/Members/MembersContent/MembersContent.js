import Item from './Item'
import './MembersContent.scss'
import Title from '../../Title/Title'
import { Link } from 'react-router-dom'

function MembersContent({data, display}){
    return (
        <section className='members'>
            <Title title='Meet Our Lovely Team' subtitle1='Distinctively grow go forward manufactured products and optimal networks.' subtitle2='Enthusiastically disseminate user-centric outsourcing through.' />
            <div style={{display : display, flexWrap : 'wrap'}} className='members_container'>
                {data.map(item => <Link to={`/details/${item.slug}`} style={{textDecoration : 'none', color : '#000000'}}><Item key={item.id} img={item.img} name={item.name} profession={item.profession} text={item.text} social1={item.social1} social2={item.social2} social3={item.social3} social4={item.social4} /></Link>)}
            </div>
        </section>
    )
}

export default MembersContent