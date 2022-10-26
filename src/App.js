import './App.css';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';
import Home from './Componants/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Singlepage from './Componants/Singlepage';
import Category from './Componants/Category';

function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/singlepost/:id' element={<Singlepage />} />
      <Route path='/category/:name' element={<Category />} />
    </Routes>
    <Footer />
  </BrowserRouter>
    
    
    </>
  );
}

export default App;
