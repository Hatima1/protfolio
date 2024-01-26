import About from "./componets/about";
import Hero from "./componets/hero";
import Nav from "./componets/nav";

function App() {
  return (
    <div className=" bg-gray-100 max-w-7xl mx-auto px-1">
      <Nav />
      <Hero />
      <About />
    </div>
  );
}

export default App;
