import React from 'react';

const Nosotros = ({ card }) => {
  return (
    <div className="row" id="nosotros-container">
      <div className="col s12">
      <h3>Nosotros</h3>
      </div>
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img src={card} />
          </div>

        </div>
      </div>

      <div className="col s6" id="nosotros-text"> <blockquote>
        <h5 id="secciones-text">Somos un servicio de catering familiar que funciona desde 1999.<br />
        Nuestro staff se destaca por estar altamente capacitado en gastornomía y repostería.
       </h5>
      </blockquote>

      </div>
    </div>
  );
}

export default Nosotros;