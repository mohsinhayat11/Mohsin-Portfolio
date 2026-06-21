import { TypeAnimation } from "react-type-animation";

function HeroRoles() {
  return (
    <TypeAnimation
      sequence={[
        "Software Engineer",
        2000,
        "Frontend Developer",
        2000,
        "React Developer",
        2000,
        "Python Developer",
        2000,
        "Full Stack Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="mt-6 block text-2xl font-semibold text-blue-400"
    />
  );
}

export default HeroRoles;