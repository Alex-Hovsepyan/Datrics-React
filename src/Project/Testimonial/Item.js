import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Item({text, stars, img, name, country}){
    return (
        <div className="testimonial_content">
            <div className="info">
                <p>{text}</p>
                {stars.map(star => <FontAwesomeIcon style={{marginRight : '5px'}} width='13px' height='13px' color="#ff7c3f" key={stars.indexOf(star)} icon={star} />)}
                <span> <strong>{stars.length.toFixed(1)}</strong> BizBite</span>
            </div>
            <div className="profile">
                <img src={img} />
                <div>
                    <h4>{name}</h4>
                    <h5>{country}</h5>
                </div>
            </div>
        </div>
    )
}

export default Item