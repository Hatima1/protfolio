import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-[#000000]  p-3 pb-10 text-white text-center  text-xl  ">
      <div className=" items-center justify-center  flex gap-1">
        <p className=" text-xl">react me at</p>
        <p className=" text-sm mt-1 underline underline-offset-2">
          hatim1300@gmail.com
        </p>
      </div>
      <div className=" justify-center  items-center flex gap-1">
        <FaGithub style={{ fontSize: "20px" }} />
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
