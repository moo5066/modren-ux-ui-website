import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Testimonias from "./components/Testimonias"
import Footer from "./components/Footer"
function App() {
  return(
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">

<Navbar/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Testimonias/>
    <Footer/>

    </div>
  )
}
export default App