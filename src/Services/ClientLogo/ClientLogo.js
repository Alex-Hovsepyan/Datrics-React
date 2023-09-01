import './ClientLogo.scss'
import client_logo1 from '../../Images/clients-logo-01.png'
import client_logo2 from '../../Images/clients-logo-02.png'
import client_logo3 from '../../Images/clients-logo-03.png'
import client_logo4 from '../../Images/clients-logo-04.png'
import client_logo5 from '../../Images/clients-logo-05.png'
import client_logo6 from '../../Images/clients-logo-06.png'
import client_logo7 from '../../Images/clients-logo-07.png'
import client_logo8 from '../../Images/clients-logo-08.png'

function ClientLogo(){
    return (
      <section className='client_logo'>
            <div className='client_logo_container'>
                <img width='103.5px' height='37px' src={client_logo1} />
                <img width='103.5px' height='37px' src={client_logo2} />
                <img width='103.5px' height='37px' src={client_logo3} />
                <img width='103.5px' height='37px' src={client_logo4} />
                <img width='103.5px' height='37px' src={client_logo5} />
                <img width='103.5px' height='37px' src={client_logo6} />
                <img width='103.5px' height='37px' src={client_logo7} />
                <img width='103.5px' height='37px' src={client_logo8} />
            </div>
      </section>
    )
}

export default ClientLogo