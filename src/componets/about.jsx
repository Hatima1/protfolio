function About() {
  return (
    <div className="  " id="about">
      <div className=" bg-teal-800 p-3 py-5  font-sans   pb-9 mb-10 ">
        <p className=" font-semibold text-3xl text-gray-100  mb-1   ">About</p>

        <div className=" flex  ">
          <p className=" text-sm md:text-lg text-gray-100  font-semibold   ">
            I'm a Full-Stack Web Developer with four years of experience in web
            development. I builds modern and effective web applications. I have
            experience in creating user-friendly front-end interfaces with
            React.js and JavaScript (ES6+), as well as strong back-end services
            using Node.js and Express. I focus on delivering solutions that are
            both innovative and responsive, while also ensuring good performance
            and security. I love turning ideas into practical applications,
            whether through designing attractive interfaces or developing
            reliable back-end systems.When I'm not coding, you'll find me
            playing chess.
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
