import React from "react";
import home from "../../../Assets/Imgs/home.png";
import urgency from "../../../Assets/Imgs/urgency.png";
import settings from "../../../Assets/Imgs/settings.png";

export default function DoctorFooter() {
  return (
    <div className='containerFooter'>
      <a href='/patient'>
        <img src={home} alt='home img' />
      </a>
      <a href='Aca va numero o url' className='urgency'>
        <img src={urgency} alt='urgency img' />
        <p>Urgencia</p>
      </a>
      <a href='/profile-configuration'>
        <img src={settings} alt='settings img' />
      </a>
    </div>
  );
}
