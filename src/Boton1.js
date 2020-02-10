import React, { Component } from 'react';
import App from './App';
import './Boton1.css';

class Boton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           
        }
    }

    
    render() { 

        
  
        return ( 
            
            <React.Fragment className="caja">
                siguiente: {this.state.siguiente} 

                <input className="cajaTex" placeholder="ingresa texto" id="cajaTexto"></input>
                <button className="btnAtras" onClick={this.tShow}>Atras</button>
                <button className="btnSiguiente">Siguiente</button>
                <button className="btnGuardar" onClick={()=> this.setState({siguiente: this.state.siguiente +1})}>Guardar</button>


               
               
            </React.Fragment>

        );
    }
}
 
export default Boton1;