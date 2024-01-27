import Contact from "./componets/Contact";
import About from "./componets/about";
import Experience from "./componets/experience";
import Hero from "./componets/hero";
import Nav from "./componets/nav";
import Project from "./componets/project";

function App() {
  return (
    <div className=" bg-gray-100 max-w-7xl mx-auto">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
