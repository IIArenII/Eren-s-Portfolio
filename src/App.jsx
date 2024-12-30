import About from "./components/About";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Tech from "./components/Tech"



function App() {
 

  return (
    <div>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div><Navbar />
      <main className="flex flex-col min-h-screen lg:px-16 md:px-8 px-4 text-white">
        
        <Home />
        <About />
        <Projects />
        <Tech />
        <Contact />
        
      </main>
      <Footer className="p-0 m-0 box-border" />
    </div>
  );
};

export default App
