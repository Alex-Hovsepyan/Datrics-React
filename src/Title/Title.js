import './Title.scss'

function Title({title, subtitle1, subtitle2, color1, color2}){
    return (
        <div className='title'>
            <h3 style={{color : color1}}>{title}</h3>
            <p style={{color : color2}}>{subtitle1}<br />{subtitle2}</p>
        </div>
    )
}

export default Title