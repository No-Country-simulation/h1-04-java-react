import { Link } from "react-router-dom";
import miniLogo from "../../Assets/Imgs/miniLogo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-top'>
        <Link to={'/patient'}><img src={miniLogo} alt='logo' className='w-32' /></Link>
      </div>
    </div>
  );
};

export default NavBar;