import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Item({icon, title, text}){
    return (
        <div className="best_services_content">
            <img width='80px' src={icon} alt="" />
            <h4>{title}</h4>
            <p>{text}</p>
            <Link>Read more <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
    )
}

export default Item