import Button from '../Button/Button'
import './ErrorPage.scss'

function ErrorPage(){
    return (
        <section className='error'>
            <h1>404</h1>
            <h3>Sorry, something went wrong</h3>
            <p>The page you are looking for might have been removed had its name<br />changed or is temporarily unavailable.</p>
            <Button title='Go to Homepage' width='176px' color='transparent' border='solid 1px #ffffff' url='/' />
        </section>
     )
}

export default ErrorPage