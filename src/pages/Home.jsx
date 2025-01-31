import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Umkm from "../sections/Umkm"
import News from "../sections/News"
import Footer from "../sections/Footer"

export default function Home() {
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
