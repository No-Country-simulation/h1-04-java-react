import NavBarLanding from "./NavBarLanding";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import FooterLanding from './FooterLanding';

export default function Landing() {
  return (
    <div className="w-full bg-white">
      <NavBarLanding />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <FooterLanding />
    </div>
  );
}
