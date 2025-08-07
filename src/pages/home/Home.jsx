import Hero from '../../componenets/hero/Hero';
import Navbar from '../../componenets/nav/Navbar';
import About from '../../componenets/about/About';
import Recycle from '../../componenets/recycling/Recycle';
import Works from '../../componenets/works/Works';
import BHero from '../../componenets/bottomHero/BHero';
import Footer from '../../componenets/footer/Footer';
import FadeInOnScroll from '../../componenets/FadeInOnScroll'


const Home = () => {
  return (
    <>
        <Navbar size={37} />

      <FadeInOnScroll delay={0.05}>
        <Hero />
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.13}>
        <About />
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        <Recycle />
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.16}>
        <Works />
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.17}>
        <BHero />
      </FadeInOnScroll>

      <Footer />
    </>
  )
}

export default Home
