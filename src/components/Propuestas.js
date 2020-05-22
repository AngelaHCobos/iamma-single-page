import React from 'react';


const propuestas = ({card2}) => {
    return ( 
    <div className="row" id="propuestas-container">
        <div className="col s12">
                <h3>Propuestas</h3>
            
            <div className="col s6" id="propuestas-text">
                <blockquote>
                <h5 id="secciones-text"> 
                Nuestras propuestas se adaptan a cualquier tipo de evento, 
                desde un cumpleaños de quince hasta un bar mitzvah.<br/>
                Pizza party, pastas, mesas dulces, y mucho más.
                </h5>
                </blockquote>
                </div>

            <div className="col s6">
                <div className="card">
                <div className="card-image">
                <img src={card2}/>
                </div>
                </div>
            </div>
            
        </div>
    </div>
     );
}
 
export default propuestas;