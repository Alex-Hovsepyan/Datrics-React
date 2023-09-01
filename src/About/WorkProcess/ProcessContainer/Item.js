import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { data } from "./data"

function Item({icon, title, text, id}){
    return (
        <div className="process_content">
            <div className="icon">
                <FontAwesomeIcon color="#ffffff" fontSize='40px' icon={icon} />
                <span>{id}</span>
                {data.length != id ? <div></div> : null}
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Item