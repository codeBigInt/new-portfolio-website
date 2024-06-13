import './App.css'
import Contact from './Pages/Contact'
import Hero from './Pages/Hero'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Services'
import About from './Pages/About'
import Kit from './Pages/Kit'
import Footer from './Pages/Footer'
import StoreProvider from './context/store'
import { FaArrowUp } from 'react-icons/fa'


function App() {
  return (
    <StoreProvider>
        <div className='App'>
        <header id='hero'>
            <Hero />
        </header>
        <main>
            <section id='About'>
              <About />
              <div className="kit-cont">
                <Kit />
              </div>
            </section>
            <section id='Services'>
              <Services />
            </section>
            <section id='Portfolio'>
              <Portfolio />
            </section>
            <section id="Contact">
              <Contact />
            </section>
        </main>
        <footer id='footer'>
          <Footer />
        </footer>
    </div>
      </StoreProvider>
  )
}

export default App
