import { Link } from "react-router-dom"

function Item({title, subtitle1, subtitle2,  subtitle3, subtitle4, link1, link2, link3, link4}){
    return (
        <div className="top_content">
            <h4>{title}</h4>
            <ul>
                <li><Link to={link1}>{subtitle1}</Link></li>
                <li><Link to={link2}>{subtitle2}</Link></li>
                <li><Link to={link3}>{subtitle3}</Link></li>
                <li><Link to={link4}>{subtitle4}</Link></li>
            </ul>
        </div>
    )
}

export default Item