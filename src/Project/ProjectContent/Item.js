function Item({img, title, subtitle}){
    return (
        <div className="project_content">
            <img src={img} />
            <div>
                <h4>{title}</h4>
                <span>{subtitle}</span>
            </div>
        </div>
    )
}

export default Item