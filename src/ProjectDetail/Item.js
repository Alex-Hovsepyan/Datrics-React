import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Item({icon, title, info}){
    return (
        <div className="project_detail_content">
            <FontAwesomeIcon style={{fontSize : '25px', color : '#162e66'}} icon={icon} />
            <div>
                <h4>{title}</h4>
                <span>{info}</span>
            </div>
        </div>
    )
}

export default Item