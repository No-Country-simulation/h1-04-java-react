import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../../helpers/atoms/Alert';
import InputComponent from '../../helpers/atoms/InputComponent';
import LinkComponent from '../../helpers/atoms/LinkComponent';
import IconComponent from '../../helpers/atoms/IconComponent';
import ButtonComponent from '../../helpers/atoms/ButtonComponent';
import logo from "../../Assets/Imgs/logo.png"

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isNonValidAccount, setIsNonValidAccount] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (fields) => {
        fields.preventDefault();
        setIsLoading(true);
        
        // Aquí iría la lógica real de conexión al backend: fetch o axios
        
            //login exitoso
            if (fields.email === 'test@example.com' && fields.password === 'password') {
                setIsLoading(false);
                setIsWrongCredentials(false);
                setIsError(false);
                setIsNonValidAccount(false);
                // Redirigir o navegar a home
                navigate('/');
            }
            else if (fields.email === 'test@example.com') {
                //error con las credenciales
                setIsLoading(false);
                setIsWrongCredentials(true);
                setIsError(false);
                setIsNonValidAccount(false);
            }
            else {
                //error general
                setIsLoading(false);
                setIsWrongCredentials(false);
                setIsError(true);
                setIsNonValidAccount(false);
            }
    };


    return (
        <div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0 lg:h-screen">
            <div className="w-full mt-10 flex flex-col items-center gap-10">
                <a href="/" className="text-2xl font-semibold text-gray-900">
                    <img className="w-64 md:w-80 h-auto" src={logo} width="500" height="361" alt="logo" />
                </a>
                
                <div className="w-full max-w-md bg-white rounded-lg border shadow-sm">
                    <div className="p-7 space-y-5">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">Login</h1>
                        
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-5">
                                <InputComponent
                                    name="email"
                                    label="Email"
                                    type="email"
                                    disabled={isLoading}
                                    placeholder="nombre@dominio.com"
                                />
                                <InputComponent
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    disabled={isLoading}
                                />
                            </div>
                            
                            <div className="flex justify-end">
                                <LinkComponent to="/recuperacion" disabled={isLoading}>Recuperacion</LinkComponent>
                            </div>
                            
                            {isWrongCredentials && <Alert type="error" message="WrongCredentials" />}
                            {isError && <Alert type="error" message="ErrorMessage" />}
                            {isNonValidAccount && <Alert type="default" message="NonValidAccountMessage" />}
                            
                            <div className="flex flex-col gap-3">
                                <ButtonComponent type="submit" theme="primary" loading={isLoading} className="w-full">
                                    <IconComponent name="ph:sign-in-bold" className="w-5 h-5" />
                                    Login
                                </ButtonComponent>
                                
                                <ButtonComponent theme="secondary" to="/registro" disabled={isLoading} className="w-full">
                                    <IconComponent name="bx:bxs-user-plus" className="w-5 h-5" />
                                    Register
                                </ButtonComponent>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;