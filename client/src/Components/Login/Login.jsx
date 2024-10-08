import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/authService";
import Alert from "../../helpers/atoms/Alert";
import InputComponent from "../../helpers/atoms/InputComponent";
import LinkComponent from "../../helpers/atoms/LinkComponent";
import IconComponent from "../../helpers/atoms/IconComponent";
import ButtonComponent from "../../helpers/atoms/ButtonComponent";
import logo from "../../Assets/Imgs/logo.png";
import AuthContext from "../../context/DoctorContext";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNonValidAccount, setIsNonValidAccount] = useState(false);
  const navigate = useNavigate();
  const { login, authData } = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      switch (authData.role) {
        case "DOCTOR":
          navigate("/doctorPatient");
          break;
        case "PATIENT":
          navigate("/patient");
          break;
        case "ADMIN":
          navigate("/admin");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, [authData, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const data = await loginService(email, password);
      setIsLoading(false);
      setIsWrongCredentials(false);
      setIsError(false);
      setIsNonValidAccount(false);

      login(data.data);
    } catch (error) {
      setIsLoading(false);
      if (error.message === "Invalid credentials") {
        setIsWrongCredentials(true);
        setIsError(false);
        setIsNonValidAccount(false);
      } else if (error.message === "Non-valid account") {
        setIsWrongCredentials(false);
        setIsError(false);
        setIsNonValidAccount(true);
      } else {
        setIsWrongCredentials(false);
        setIsError(true);
        setIsNonValidAccount(false);
      }
    }
  };

  // Doctor account
  function doctor() {
    setEmail("doctor1@doctor.com");
    setPassword("12345Aa*");
  }
  function patient() {
    setEmail("juan@patient.com");
    setPassword("12345Aa*");
  }
  function admin() {
    setEmail("admin1@admin.com");
    setPassword("12345Aa*");
  }

  return (
    <div className='flex flex-col items-center justify-center px-6 mx-auto mb-10 lg:py-0'>
      <div className='w-full mt-10 flex flex-col items-center gap-10'>
        <a href='/' className='text-2xl font-semibold text-gray-900'>
          <img
            className='w-64 md:w-80 h-auto'
            src={logo}
            width='500'
            height='361'
            alt='logo'
          />
        </a>
        
        <div className='flex gap-5'>
          <button onClick={() => doctor()} className='w-24 shadow px-4 text-black py-2 rounded bg-secondary'>
            Doctor
          </button>
          <button onClick={() => patient()} className='w-24 shadow px-4 text-black py-2 rounded bg-secondary'>
            Paciente
          </button>
          <button onClick={() => admin()} className='w-24 shadow px-4 text-black py-2 rounded bg-secondary'>
            Admin
          </button>
        </div>
        
        <div className='w-full max-w-md bg-white rounded-lg border shadow-sm'>
          <div className='p-7 space-y-5'>
            <h1 className='text-2xl font-bold leading-tight tracking-tight text-gray-900'>
              Login
            </h1>
            
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>
                <InputComponent
                  name='email'
                  label='Email'
                  type='email'
                  disabled={isLoading}
                  placeholder='nombre@dominio.com'
                  value={email}
                  onChange={(e) => {
                    console.log("Email changed:", e.target.value);
                    setEmail(e.target.value);
                  }}
                />

                <InputComponent
                  name='password'
                  label='Contraseña'
                  type='password'
                  disabled={isLoading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='flex justify-end'>
                <LinkComponent to='/recuperacion' disabled={isLoading}>
                  Recuperacion
                </LinkComponent>
              </div>

              {isWrongCredentials && (
                <Alert type='error' message='WrongCredentials' />
              )}
              {isError && <Alert type='error' message='ErrorMessage' />}
              {isNonValidAccount && (
                <Alert type='default' message='NonValidAccountMessage' />
              )}

              <div className='flex flex-col gap-3'>
                <ButtonComponent
                  type='submit'
                  theme='primary'
                  loading={isLoading}
                  className='w-full'
                >
                  <IconComponent name='ph:sign-in-bold' className='w-5 h-5' />
                  Continuar
                </ButtonComponent>

                {/* <ButtonComponent
                  theme='secondary'
                  to='/registro'
                  disabled={isLoading}
                  className='w-full'
                >
                  <IconComponent name='bx:bxs-user-plus' className='w-5 h-5' />
                  Register
                </ButtonComponent> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
