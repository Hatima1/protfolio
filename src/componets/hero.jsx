import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className="  justify-items-center max-w-6xl mx-auto mb-10   grid grid-cols-2 ">
      <div className=" pt-10 pl-6 ">
        <h2 className=" text-2xl font-semibold text-teal-900  ">
          Hello There I'm hatim
        </h2>
        <h2 className=" text-5xl font-semibold text-gray-900 mb-2">
          front-end react devlober
        </h2>
        <p className=" mb-5 text-sm   font-semibold text-gray-700 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          aspernatur. Et dignissimos facere a tenetur nostrum? Mollitia odio
          doloribus ea labore earum autem voluptatem ut at minus! Iste, at
          aspernatur?
        </p>

        <div className="  items-center flex gap-1">
          <FaGithub style={{ fontSize: "20px" }} />
          <FaLinkedin style={{ fontSize: "20px" }} />
          {/* <div></div>
          <span className=" flex  items-center rounded-sm  p-2  bg-gray-900  text-white text-sm font-semibold">
            <FaExternalLinkAlt style={{ fontSize: "10px" }} /> Open Cv
          </span> */}
        </div>
      </div>
      <div>
        <img
          className="   w-36 "
          src="..\3d-business-guy-with-backpack-and-laptop.png"
        />
      </div>
    </div>
  );
}

export default Hero;
