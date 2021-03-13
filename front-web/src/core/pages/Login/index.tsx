import LoginCard from './LoginCard';
import './styles.css';
import { ReactComponent as IconLogin } from './desenho.svg'

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-info">
                <h1 className='login-info-title'>Avalie Filmes</h1>
                <p className='login-info-subtitle'>
                Diga o que você achou do seu filme favorito 
                </p>
                <div className='icon-container'>
                    <IconLogin />
                </div>
            </div>
            <div className="login-content">
                <LoginCard />
            </div>
        </div>
    );
}

export default Login;