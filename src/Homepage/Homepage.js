import Button from '../Button/Button';
import './Homepage.scss';

function Homepage({background, subtitle, title, text, btn, btn_width, btn_color, img1, img2, img3}){
    return (
        <div style={{backgroundImage : `url(${background})`}} className='homepage'>
            <div className='homepage_container'>
                <div className="homepage_text">
                    <span>{subtitle}</span>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <Button title={btn} width={btn_width} color={btn_color} />
                </div>
                <div className='homepage_img'>
                    <img className='big_img' src={img1} />
                </div>
            </div>
        </div>
    )
}

export default Homepage