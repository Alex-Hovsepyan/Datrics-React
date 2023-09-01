import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './ButtonPlay.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonPlay(){
    return (
        <div className='play'>
            <a href="">
                <FontAwesomeIcon color='#162e66' icon={faPlay} fontSize='30px' />
            </a>
        </div>
    )
}

export default ButtonPlay