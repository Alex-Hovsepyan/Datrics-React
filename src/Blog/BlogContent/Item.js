import { Link } from "react-router-dom"

function Item({type, img, title, date, text}){
    return (
        <div className="blog_content">
            <div className="image">
                <img src={img} />
                <span>{type}</span>
            </div>
            <div className="info">
                <h3>{title}</h3>
                <span>{date}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Item