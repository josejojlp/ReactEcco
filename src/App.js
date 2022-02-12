import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Inicio from './containerpresenter/inicio/inicio';
import Nosotros from './containerpresenter/nosotros/nosotros';
import Contacto from './containerpresenter/contacto/contacto';
import ItemDetailV from './containerpresenter/itemdetail/itemdetailv';
import Cart from './containerpresenter/cart/cart';

const App = () => {

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/detail/:id' element={<ItemDetailV />}/>
        </Routes>
     
     </div>
     </Router>
);
}

export default App;
