import './styles.css';
import { ReactComponent as ArrowIcon } from './arrow.svg'
import { useForm } from 'react-hook-form';
import { makeLogin } from '../../../utils/request';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveSessionData } from '../../../utils/auth';


type FormData = {
    username: string;
    password: string;
}

const LoginCard = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormData) => {
        makeLogin(data)
        .then(response =>{
            setHasError(false)
            saveSessionData(response.data)
            history.push('/catalog');
        })
        .catch(()=>{
            setHasError(true);
        })
    };
    return (
        <div className='login-card-container'>
            <h1 className='login-card-title'>LOGIN</h1>
            {hasError && (
                <div className='login-alert'>
                    Usuario ou senha inválidos !
                </div>
            )}
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder='Email'
                    className='input-email'
                    name="username" ref={register({required: true})} />
                <input
                    type="password"
                    placeholder='Senha'
                    className='input-password'
                    name="password" ref={register({required: true})} />
                <div className='button-content'>
                    <button className='button-icon'>
                        <h3 className='title-btn'>LOGAR</h3>
                    </button>
                    <div className='button-arrow'>
                        <ArrowIcon />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginCard;