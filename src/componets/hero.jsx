import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="  justify-items-center max-w-6xl mx-auto mb-10 md:grid-cols-2   grid grid-cols-1 ">
      <div className=" mx:px-0 px-1 md:pt-10 pt-8  pl-6 ">
        <h2 className=" text-2xl font-semibold text-teal-900  ">
          Hello There I'm hatim
        </h2>
        <h2 className=" text-4xl font-semibold text-gray-900 mb-2">
          Front-End React Developer
        </h2>
        <p className=" mb-5 text-sm   font-semibold text-gray-800 ">
          I specialize in designing and developing websites, always striving to
          add a touch of simplicity and elegance to each project, strive to
          create distinctive user experiences that reflect your identity and
          meet audience expectations.
        </p>

        <div className="  items-center flex gap-1">
          <a href="https://github.com/Hatima1">
            <FaGithub style={{ fontSize: "20px" }} />
          </a>
          <a href="https://www.linkedin.com/in/hatim-alkhalifa-bb7aa6226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            <FaLinkedin style={{ fontSize: "20px" }} />
          </a>

          <div></div>
          <a
            href="https://drive.google.com/file/d/1RUXicnYapS6S2au3es0DwvHQt3UwbxtI/view?usp=drive_link"
            className=" flex  items-center rounded-sm  p-1  bg-gray-900  text-white text-sm font-semibold"
          >
            <FaExternalLinkAlt style={{ fontSize: "10px" }} /> open cv
          </a>
        </div>
      </div>
      <div className=" md:row-auto    ">
        <img
          alt="hero pic"
          className="   w-28   md:w-36 "
          src="\3d-business-guy-with-backpack-and-laptop.png"
        />
      </div>
    </div>
  );
}

export default Hero;
