import './BlogContent.scss'
import Title from '../../Title/Title'
import Item from './Item'

function BlogContent({data, display}){
    return (
        <div className='blog_container'>
            <Title title='Our Latest News' subtitle1='Enthusiastically drive revolutionary opportunities before emerging leadership.' subtitle2='Phosfluorescently cultivate emerging alignments time methods of empowerment.' />
            <div className='blog_contents' style={{display : display}}>
                {data.reverse().map(item => <Item type={item.type} img={item.img} title={item.title} date={item.date} text={item.text} />)}
            </div>
        </div>
    )
}

export default BlogContent