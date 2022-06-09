import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import About from './pages/about';

import './assets/css/main.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container-fluid'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
