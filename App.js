
import './App.css';
import Footer from './components/Footer'
import Section from './components/Section'
import Rutas from './components/react-router/Rutas'
import CarouselBurguer from './components/CarouselBurguer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './carrito/Cart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rutas/>
      </header>
          
    
        <div className="hero">
         
            <h1 className='fourColumns'>
            Cabras <br/> Locas
            </h1>
       
        </div>
        <div className='section'></div>
        <CarouselBurguer/>
        <Section/>
        <Cart/>
 
      <Footer/>
    </div>
  );
}

export default App;
