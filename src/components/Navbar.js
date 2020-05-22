import React from 'react';

const Navbar = ({ logo }) => (
    <div className="row">
      <div className="navbar-fixed" >
        <nav className="nav-extended" id="nav">

          <img src={logo} width="95px" height="35px" id="navlogo" />

          <ul className="tabs tabs-fixed" id="secciones">

            <li className="tab col s4">
              <a className="black-text waves-effect waves-purple" href="#nosotros-container">
                <h6>Nosotros</h6>
              </a>
            </li>

            <li className="tab col s4">
              <a className="black-text waves-effect waves-purple" href="#propuestas-container">
                <h6>Propuestas</h6>
              </a>
            </li>

            <li className="tab col s4">
              <a className="black-text waves-effect waves-purple" href="#contacto-container">
              <h6>Contacto</h6>
              </a>
            </li>

          </ul>


        </nav>
      </div>
    </div>
  );

export default Navbar;