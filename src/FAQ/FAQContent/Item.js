import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({ icon, question, answer }) {
    function active(e) {
      
      if(document.querySelector(".active_item")){
        const active_item = document.querySelectorAll(".active_item")
        active_item.forEach(item => {
          if(item.parentNode == e.currentTarget.parentNode){
            item.classList.remove('active_item')
            item.querySelector('span').innerHTML = '+'
          }
        })
      }
      e.currentTarget.classList.add('active_item');
      e.currentTarget.querySelector('span').innerHTML = '-'
    }

    return (
        <div onClick={active} className="FAQ_content">
          <div className="top">
            <div>
              <FontAwesomeIcon fontSize="15px" color="#707070" icon={icon} />
              <h5>{question}</h5>
            </div>
            <span>+</span>
          </div>
          <p>{answer}</p>
        </div>
    );
}

export default Item;
