import React from 'react';
import Navbar from './components/Navbar';
import iamma from './images/iammalogo.png';
import Slidebar from './components/Slidebar';
import Nosotros from './components/Nosotros'
import Propuestas from './components/Propuestas';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import Contacto from './components/Contacto';
import Footer from './components/Footer';



function App() {
  return (
    
  <div className="App">
    <Navbar
    logo={iamma}/>

    <Slidebar/>
        
    <Nosotros
    card={card1}/>

    <Propuestas
    card2={card2}/>
        
    <Contacto/>
        
    <Footer/>
    </div>
  );
}

export default App;
