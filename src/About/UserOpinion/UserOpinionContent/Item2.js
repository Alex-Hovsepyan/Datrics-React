import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CountUp from 'react-countup';

function Item2({icon, title, count}){
    return (
        <div className="users_info">
            <FontAwesomeIcon fontSize='35px' color="#162e66" icon={icon} />
            <CountUp className="counter" end={count} duration={10} />
            <span>{title}</span>
        </div>
    )
}

export default Item2