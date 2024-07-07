import { useState } from 'react';
import Alert from '../../helpers/atoms/Alert';
import FormComponent from '../../helpers/atoms/FormComponent';
import InputComponent from '../../helpers/atoms/InputComponent';
import LinkComponent from '../../helpers/atoms/LinkComponent';
import IconComponent from '../../helpers/atoms/IconComponent';
import ButtonComponent from '../../helpers/atoms/ButtonComponent';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isNonValidAccount, setIsNonValidAccount] = useState(false);

    const handleSubmit = (fields) => {
        setIsLoading(true);
        
        // Aca logica real conectando al backend: fetch o axios
        
        setTimeout(() => {
        // Mock login exitoso
            if (fields.email === 'test@example.com' && fields.password === 'password') {
                setIsLoading(false);
                setIsWrongCredentials(false);
                setIsError(false);
                setIsNonValidAccount(false);
                // ACA redirigir o navegar a home
            }
            else if (fields.email === 'test@example.com') {
                // Mock error con las credensiales
                setIsLoading(false);
                setIsWrongCredentials(true);
                setIsError(false);
                setIsNonValidAccount(false);
            }
            else {
                // Mock error general
                setIsLoading(false);
                setIsWrongCredentials(false);
                setIsError(true);
                setIsNonValidAccount(false);
            }
        }, 1500);
    };


    return (
        <div className="flex flex-col items-center justify-center p-6 mx-auto lg:py-0 lg:h-screen">
            <div className="w-full mt-10 flex flex-col items-center gap-10">
                <a href="/" className="text-2xl font-semibold text-gray-900">
                    <img className="w-64 md:w-80 h-auto" src="/imagotype.webp" width="500" height="361" alt="logo" />
                </a>
                
                <div className="w-full max-w-md bg-white rounded-lg border shadow-sm">
                    <div className="p-7 space-y-5">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">LogIn.Title</h1>
                        
                        <FormComponent onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-5">
                            <InputComponent
                            type="email"
                            name="email"
                            label="Email"
                            rules="required|email"
                            placeholder="nombre@dominio.com"
                            disabled={isLoading}
                            />
                            <InputComponent
                            type="password"
                            name="password"
                            label="Contraseña"
                            rules="required"
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
                            LogIn.LogIn
                            </ButtonComponent>
                            
                            <ButtonComponent theme="secondary" to="/registro" disabled={isLoading} className="w-full">
                            <IconComponent name="bx:bxs-user-plus" className="w-5 h-5" />
                            LogIn.SignUp
                            </ButtonComponent>
                        </div>
                        </FormComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;