import { Link } from 'react-router-dom';
import './Button.scss';

function Button({title, color, width, url, border, textcolor, transform, padding}){
    return (
        <Link to={url}><button style={{ backgroundColor : color, width : width, border : border, color : textcolor, textTransform : transform, padding : padding }}>{title}</button></Link>
    )
}

export default Button