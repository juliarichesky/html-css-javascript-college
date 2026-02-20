import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import '../public/css/fonts.css';
import '../public/css/stylesGENERAL.css';
import '../public/css/stylesLG.css';
import '../public/css/stylesMD.css';
import '../public/css/stylesSM.css';
import '../public/css/stylesXL.css';
import '../public/css/stylesXS.css';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
    <div id="wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
    </>
  )
}
export default App;