import FooterLanding from '../Landing/FooterLanding';
import NavBarDownload from "./NavBarDownload";

const Download = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBarDownload />
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        Hola
      </div>
      <FooterLanding />
    </div>
  );
};

export default Download;
