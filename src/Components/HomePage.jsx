import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import Projects from "./Projects";

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
     <Header></Header>
     <About></About>
      <Projects></Projects>
     <Education></Education>
     
      <Contact></Contact>
     
    </div>
  );
};

export default HomePage;