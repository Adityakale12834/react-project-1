import AddOwn from "./components/AddOwn"
import Community from "./components/Community"
import Connect from "./components/Connect"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

function App() {
  

  return (
    <>
      <div className="d-flex flex-column justify-content-center">
      <Navbar/>
      <Home/>
      <Connect/>
      <AddOwn/>
      <Testimonials/>
      <Community/>
      <Footer/>
      </div>
    </>
  )
}

export default App
