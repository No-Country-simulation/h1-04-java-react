import SliderButton from "./SliderButton";
import "./notifications.css";

const Notifications = () => {
  return (
    <section className='containerNotifications'>
      <h3>General</h3>
      <SliderButton name='Medicación' />
      <SliderButton name='Tratamiento' />
      <SliderButton name='Alimentación' />
      <SliderButton name='Actividad Física' />
      <SliderButton name='Tratamiento' />
      <SliderButton name='Comunicación' />

      <h3 className='mt-5'>SMS | WhatsApp</h3>
      <SliderButton name='Comunicación' />
      <SliderButton name='Turnos Médico' />
      <SliderButton name='Medicación' />
    </section>
  );
};

export default Notifications;
