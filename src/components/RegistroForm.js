import React from 'react';

const RegistroForm = () => {
  return (
    <form className="hide">
      <p>Registro</p>
      <div className="form-outline mb-4">
        <input type="text" className="form-control" required placeholder="Nombres" />
        <label className="form-label" for="form2Example11">Nombres</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" className="form-control" required placeholder="Apellidos" />
        <label className="form-label" for="form2Example11">Apellidos</label>
      </div>
      <div className="form-outline mb-4">
        <input type="email" className="form-control" id="correo" oninput="validarCorreo()" placeholder="Correo Institucional" />
        <label className="form-label" for="form2Example11">Correo</label>
        <p id="correoMensaje" className="text-danger text-center"></p>
      </div>
      <div className="form-outline mb-4">
        <input type="password" id="Password" className="form-control" oninput="validarPassword()" />
        <label className="form-label" for="form2Example22">Contraseña</label>
        <p id="MensajePass" className="text-danger text-center"></p>
      </div>
      <div className="form-outline mb-4">
        <input type="password" id="RepeatPassword" className="form-control" oninput="validarRepetirPassword()" />
        <label className="form-label" for="form2Example22">Repita la contraseña</label>
        <p id="MensajeConfirmacion" className="text-danger text-center"></p>
      </div>
      <div className="form-outline mb-4">
        <input type="number" id="cedula" className="form-control" oninput="validarCedula()" />
        <label className="form-label" for="form2Example22">Cedula</label>
        <p id="MensajeCedula" className="text-danger text-center"></p>
      </div>
      <div className="text-center pt-1 mb-5 pb-1">
        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Registrarse</button>
      </div>
      <div className="d-flex align-items-center justify-content-center pb-4">
        <p className="mb-0 me-2">Tienes cuenta</p>
        <button type="button" className="btn btn-outline-danger" id="btnIniciarSesion">Inicia Sesión</button>
      </div>
    </form>
  );
}

export default RegistroForm;
