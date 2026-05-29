import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Equipment from '../sections/Equipment'
import Products from '../sections/Products'
import History from '../sections/History'
import Partners from '../sections/Partners'
import Contact from '../sections/Contact'
import Location from '../sections/Location'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Equipment />
        <Products />
        <History />
        <Partners />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  )
}
