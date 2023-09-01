import Button from "../../Button/Button"

function Item({title, img, price, offers}){

    return (
        <div className="pricing_content">
            <h4>{title}</h4>
            <img src={img} />
            <h2>{price}</h2>
            <ul>
                {offers.map(item => <li key={offers.indexOf(item)}>{item}</li>)}
            </ul>
            <Button url='/contact/' title='Purchase now' border='solid 1px #162E66' color='transparent' textcolor='#162E66' width='157px' />
        </div>
    )
}

export default Item