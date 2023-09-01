import './Blog.scss'
import SubHeader from '../SubHeader/SubHeader'
import BlogContent from './BlogContent/BlogContent'
import { data } from './BlogContent/data'

function Blog(){
    return (
        <>
            <SubHeader title='Blog Default' subtitle='Our Blogs' />
            <section className='blog'>
                <BlogContent data={data} />
            </section>
        </>
    )
}

export default Blog