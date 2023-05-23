import styles from './style';
import { Navbar, About, Footer, Home, Projects, Services, Stack, Testimonials, Hero } from './components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`} >
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Home/>
          <About/>
          <Services/>
          <Stack/>
          <Projects/>
          <Testimonials/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App