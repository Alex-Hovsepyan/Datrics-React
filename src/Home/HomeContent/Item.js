import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button/Button";

function Item({icon, title, text, color, border}){
    return (
        <div className="home_content">
            <FontAwesomeIcon style={{fontSize : '40px', color : '#1351a8'}} icon={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
            <Button title='Learn More' color={color} width='137px' border={border} url='/about/' />
        </div>
    )
}

export default Item