import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ArtWork from "./components/ArtWork";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <ArtWork />
      <Footer />
    </div>
  );
}

export default App;
