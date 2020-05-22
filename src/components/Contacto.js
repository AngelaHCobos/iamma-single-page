import React, { useState, Fragment } from 'react';
import emailjs from 'emailjs-com';



const Contacto = () => {
  const [error, guardarError] = useState(false);
  const [campos, guardarCampos] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensage: ''
  })

  const tomarCampos = (e) => {
    guardarCampos({
      ...campos,
      [e.target.name]: e.target.value
    })
  }


  const sendEmail = (e) => {

    e.preventDefault();

    // extraer datos de los inputs
    const { nombre, telefono, email, mensage } = campos;

    // validar campos
    if (nombre === '' || telefono === '' || email === '' || mensage === '') {
      guardarError(true);
      return;
    } else {
      guardarError(false);
      //enviamos el mail
      emailjs.sendForm('gmail', 'template_2fRiN7qY', e.target, 'user_55KuKzJAxVaYibLSLlILm')
        .then((result) => {

        }, (error) => {
          console.log(error.text);
        });

      // limpiar state
      guardarCampos({
        nombre: '',
        telefono: '',
        email: '',
        mensage: ''
      });

      // reset form
      e.target.reset();
    }




  }

  return (
    <Fragment>
      <div className="row" id="contacto-container">
        <div className="col s12 ">

          <h3>Contacto</h3>
          
          <div className="card" id="contacto-card">
            <h4 className="card-title" id="contacto-text">¡Envianos tu consulta!</h4>
            <div className="card-content white-text">
              
              {error ? <h6 className="danger">Todos los campos son requeridos</h6>
                : null}
              
              <form className="contact-form" onSubmit={sendEmail}>

                <input type="hidden" name="contact_number" />

                <div className="col s6">
                  <label>Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    onChange={tomarCampos}
                  />
                </div>

                <div className="col s6">
                  <label>Teléfono</label>
                  <input
                    type="number"
                    name="telefono"
                    onChange={tomarCampos} />
                </div>

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={tomarCampos} />

                <label>Mensaje</label>
                <textarea
                  name="mensage"
                  onChange={tomarCampos} />

                <input type="submit" value="Enviar" className="btn waves-effect waves-light purple lighten-4" id="boton" />
              
              </form>
            </div>
          </div>


        </div>
      </div>

    </Fragment>


  );
}

export default Contacto;