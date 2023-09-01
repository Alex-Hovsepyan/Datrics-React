import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Item({text, img, name, country}){
    return (
        <div className="review_content">
            <p><FontAwesomeIcon color="#162E66" fontSize='42px' icon={faQuoteLeft} />{text}</p>
            <div className="review_info">
                <img src={img} />
                <div>
                    <h4>{name}</h4>
                    <span>{country}</span>
                </div>
            </div>
        </div>
    )
}

export default Item