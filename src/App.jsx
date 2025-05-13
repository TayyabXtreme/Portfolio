import About from './sections/About'
import Contact from './sections/Contact'
import Experiences from './sections/Experiences'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App