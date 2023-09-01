import './SubHeader.scss';

function SubHeader({title, subtitle}){
    return (
        <div className="subheader">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div></div>
        </div>
    )
}

export default SubHeader