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
                 
            <input className="cajaTex" placeholder="ingresa texto" id="cajaTexto"></input>
                
                <input type="button" className="btnAtras" href="javascript:history.go(-1)" value="Volver Atrás" onclick="history.back()" onClick={()=>{
               alert("esta en uso")
                     }} />

                <input type="button" className="btnSiguiente" href="javascript:history.go(1)" value="Siguiente" onclick="history.back()" onClick={()=>{
               alert("esta en uso")
                     }} />    
                
                <button className="btnGuardar" onClick={()=> this.setState({siguiente: this.state.siguiente +1})}>Guardar</button>
               
            </React.Fragment>

        );
    }
}
 
export default Boton1;
