import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="  py-1 mb-2  md:mb-10 pt-4 flex justify-center shadow   bg-zinc-100   items-center gap-7 font-semibold text-lg  md:text-lg text-gray-950  pl-3 ">
      <Link
        className=" hover:text-teal-600  cursor-pointer  transition-all   "
        to="about"
        smooth={true}
        duration={500}
      >
        About
      </Link>
      <Link
        className=" hover:text-teal-600  cursor-pointer  transition-all   "
        to="Experience"
        smooth={true}
        duration={500}
      >
        Experience
      </Link>
      <Link
        duration={500}
        smooth={true}
        className=" hover:text-teal-600  cursor-pointer  transition-all    "
        to="Project"
      >
        {" "}
        Project
      </Link>
      <Link
        duration={500}
        smooth={true}
        className=" hover:text-teal-600  cursor-pointer  transition-all    "
        to="Contact"
      >
        {" "}
        Content
      </Link>
    </nav>
  );
}

export default Nav;
