function About() {
  return (
    <div className="  " id="about">
      <div className=" bg-teal-800 p-3 py-5  font-sans   pb-9 mb-10 ">
        <p className=" font-semibold text-3xl text-gray-100  mb-2 up  ">
          About
        </p>

        <div className=" flex  ">
          <p className=" text-sm md:text-lg text-gray-100 font-medium    ">
            I'm a front end developer with four years of experience in web
            development. Specializing in designing and developing user
            experiences that are responsive across various devices, I am
            passionate about optimizing web performance. I strive to transform
            ideas into reality and always looking forward to new challenges.When
            I'm not coding, you'll find me playing chess.
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
