import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="bg-[#000000]  p-3 pb-5 text-white text-center  text-xl   "
      id="Contact"
    >
      <div className=" items-center justify-center  flex gap-1">
        <p className=" text-xl"> Reach me at</p>
        <a
          className=" text-sm  underline underline-offset-2"
          href=" mailto:hatim.alkhaalifa@gmail.com"
        >
          hatim.alkhaalifa@gmail.com
        </a>
      </div>
      <div className=" justify-center  items-center flex gap-1">
        <a href="https://github.com/Hatima1">
          <FaGithub style={{ fontSize: "20px" }} />
        </a>
        <FaLinkedin style={{ fontSize: "20px" }} />
        {/* <div></div>
          <span className=" flex  items-center rounded-sm  p-2  bg-gray-900  text-white text-sm font-semibold">
            <FaExternalLinkAlt style={{ fontSize: "10px" }} /> Open Cv
          </span> */}
      </div>
    </div>
  );
}

export default Contact;
