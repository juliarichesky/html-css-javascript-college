import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;