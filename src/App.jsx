import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Tech from "./components/Tech"


function App() {
 

  return (
    <div class="fixed top-0 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <main className="flex flex-col lg:px-16 md:px-8 px-4 text-white">
        <Navbar />
        <Home />
        <Tech />
        <Contact />
      </main>
    </div>
  )
}

export default App
