import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({icon, title, text}){
    return (
        <div className="about_offer_content">
            <FontAwesomeIcon color="#1351a8" width='40px' fontSize='40px' icon={icon} />
            <div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Item