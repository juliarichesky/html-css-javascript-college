import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import FilterBar from "./components/FilterBar/FilterBar";
import Gallery from "./components/Gallery/Gallery";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Newsletter from "./components/Newsletter/Newsletter";

const App = () => {
  return(
    <>
    <Header/>
    <Hero/>
    <Categories/>
    <FilterBar/>
    <Gallery />
    <Features />
    <About />
    <Newsletter />
    <Footer/>
    </>
  )
}
export default App;