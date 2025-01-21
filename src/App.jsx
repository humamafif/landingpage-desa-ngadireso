import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer"
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import News from "./components/News"
import Umkm from "./components/Umkm";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Umkm />
      <News />
      <Footer />
    </>
  )
}