function About() {
  return (
    <div className="  " id="about">
      <div className=" bg-teal-800 p-3 py-5  font-sans   pb-9 mb-10 ">
        <p className=" font-semibold text-3xl text-gray-100  mb-1   ">About</p>

        <div className=" flex  ">
          <p className=" text-sm md:text-lg text-gray-100  font-semibold   ">
            I'm a Full-Stack Web Developer with three years of experience in
            front-end development and a growing expertise in back-end
            development. I specialize in creating modern, user-friendly web
            applications using React.js and JavaScript (ES6+), and I have
            foundational experience in building back-end services with Node.js
            and Express. My focus is on delivering innovative, responsive, and
            secure solutions. I enjoy turning ideas into practical applications,
            whether through designing intuitive interfaces or developing
            reliable systems. When I'm not coding, you'll find me playing chess.
          </p>
          {/* <div className="  flex-shrink w-96 ">
            <img
              className=" 
            text-center inline-block   w-20"
              src="../business-3d-joyful-young-black-man-jumping.png"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
