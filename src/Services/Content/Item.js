function Item({background, img, title, text}){
    return (
        <div className="services_content">
            <img width='100px' height='118px' src={img} />
            <h4>{title}</h4>
            <p>{text}</p>
            <div className="background" style={{ background : `linear-gradient(75deg, rgba(93, 78, 230, 0.85) 10%, rgba(19, 13, 65, 0.85)), url(${background}) center`, backgroundSize : 'contain' }}>
                <img width='100px' height='118px' src={img} />
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Item