import './styles.css';
import { ReactComponent as ArrowIcon } from './arrow.svg'
import { Link } from 'react-router-dom'
const LoginCard = () => {
    return (
        <div className='login-card-container'>
            <h1 className='login-card-title'>LOGIN</h1>
            <form className='login-form'>
                <input
                    type="email"
                    placeholder='Email'
                    className='input-email' />
                <input
                    type="password"
                    placeholder='Senha'
                    className='input-password' />
                <Link to='/catalog'>
                    <div className='button-content'>
                        <button className='button-icon'>
                            <h3 className='title-btn'>LOGAR</h3>
                        </button>
                        <div className='button-arrow'>
                            <ArrowIcon />
                        </div>
                    </div>
                </Link>
            </form>
        </div>
    );
}

export default LoginCard;