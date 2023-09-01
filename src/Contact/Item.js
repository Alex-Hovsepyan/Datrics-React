import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Item({icon, title, subtitle, key}){
    return (
        <div className="contact_content">
            {key == 4 ? (<FontAwesomeIcon icon={icon} flip="horizontal" />) : (<FontAwesomeIcon icon={icon} />)}
            <h4>{title}</h4>
            <span>{subtitle}</span>
        </div>
    )
}

export default Item