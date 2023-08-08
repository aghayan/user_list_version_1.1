import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {Route, Routes, useNavigate } from 'react-router-dom';
import '../style/loginStyle.scss'




export function Registr({AddData}){
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const navigate = useNavigate()


    const onSubmit = (data) => {
        if (login === 'arman2002' && password === '!Arman2002$') {
            setLogin('');
            setPassword('');
            navigate('/list');
            reset();
            console.log(data);
        } else {
            setError('Invalid login or password'); // Set the error message if login or password is incorrect
        }
      };



    return(
        <div>
            <div className="wrapper">
                <div className="container">
                    <h1>Login</h1>
                    <div className="registration">
                        <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                            <input  {...register("login", { required: "Password is required" })} 
                                type="text" 
                                placeholder='Login'
                                value={login}
                                onChange={(e) => {
                                    setLogin(e.target.value);
                                  }}

                            />
                            <input  {...register("password", { required: "Password is required" })} 
                                type="password" 
                                placeholder='Password'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                            />
                            <div className='errors'>
                                {errors.login && <p className={(errors.login || (login !== 'arman2002' && login !== '')) ? "error" : ""}>{errors.login.message}</p>}
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <>
                                {error && <p className="error">{error}</p>} {/* Display the error message */}
                                <button>Sign up</button>
                            </>

                        </form>
                        
                    </div>
                </div>
            </div>
            
        </div>

    )
}


