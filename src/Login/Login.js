import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.scss'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

function Login(){
    return (
        <section className='login'>
            <div className='login_container'>
                <div className='title'>
                    <h2>Welcome Back !</h2>
                    <p>Keep your face always toward the sunshine - and shadows will fall behind you.</p>
                </div>
                <div className='login_content'>
                    <h3>Log in</h3>
                    <p>Sign in to your account to continue.</p>
                    <form action='/' method='post'>
                        <div className='inputs'>
                            <label for="1">Email Address</label>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input type='email' placeholder='name@youremail.com' />
                            </div>
                            <label for="">Password</label>
                            <div>
                                <FontAwesomeIcon icon={faLock} />
                                <input type='password' placeholder='Enter your password' />
                            </div>
                        </div>
                        <button>Sign In</button>
                        <p>Not registered? <a href="">Create account</a></p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login