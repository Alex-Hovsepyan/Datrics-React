import Item from './Item'
import './ProcessContainer.scss'
import { data } from './data'

function ProjessContainer(){
    return (
        <div className='process_container'>
            {data.map(item => <Item key={item.id} id={item.id} icon={item.icon} title={item.title} text={item.text} />)}
        </div>
    )
}

export default ProjessContainer