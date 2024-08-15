import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../../services/authService";
import Alert from "../../helpers/atoms/Alert";
import InputComponent from "../../helpers/atoms/InputComponent";
import LinkComponent from "../../helpers/atoms/LinkComponent";
import ButtonComponent from "../../helpers/atoms/ButtonComponent";
import logo from "../../Assets/Imgs/logo.png";
import AuthContext from "../../context/DoctorContext";
import SuccesModal from "../../Components/Modals/SucessModal";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isWrongCredentials, setIsWrongCredentials] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNonValidAccount, setIsNonValidAccount] = useState(false);
  const [focus, setFocus] = useState({ email: false, password: false });
  const [showVerificando, setShowVerificando] = useState(false);

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
    setEmail("maria@patient.com");
    setPassword("12345Aa*");
  }
  function admin() {
    setEmail("admin1@admin.com");
    setPassword("12345Aa*");
  }

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
  };


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
        
        <div className='w-full max-w-md rounded-lg shadow-sm'>
          <div className='p-7 space-y-5'>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5'>
                <InputComponent
                  name='email'
                  label='Email'
                  type='email'
                  disabled={isLoading}
                  placeholder='nombre@dominio.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  hasFocus={focus.email}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                />
                
                <InputComponent
                  name='password'
                  label='Contraseña'
                  type='password'
                  disabled={isLoading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  hasFocus={focus.password}
                  onFocus={() => handleFocus('password')}
                  onBlur={() => handleBlur('password')}
                />
              </div>

              { isWrongCredentials && (
                <Alert type='error' message='WrongCredentials' />
              ) }
              { isError && <Alert type='error' message='ErrorMessage' /> }
              { isNonValidAccount && (
                <Alert type='default' message='NonValidAccountMessage' />
              ) }

              <div className='flex flex-col gap-3'>
                <ButtonComponent
                  type='submit'
                  theme='purpleClear'
                  loading={isLoading}
                  className='w-full'
                >
                  Continuar
                </ButtonComponent>
              </div>
            </form>
          </div>
          
          <div className='flex justify-center text-gray mt-5 mb-5'>
            <button onClick={() => setShowVerificando(true)} disabled={isLoading}>
              Recuperar Contraseña
            </button>
          </div>
        </div>
      </div>
      {/* Modal Password */}
      { showVerificando && (
        <>
          <div className="overlay"></div>
          <SuccesModal
            title='No disponible'
            text='Estamos trabajando en esta característica'
            show={showVerificando}
            onClose={() => setShowVerificando(false)}
            none
          />
        </>
      ) }
    </div>
  );
};

export default Login;