import miniLogo from "../../Assets/Imgs/miniLogo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-top'>
        <a href='/'><img src={miniLogo} alt='logo' className='w-32' /></a>
      </div>
    </div>
  );
};

export default NavBar;