/* eslint-disable */
import React, { useState } from 'react';
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

function toggleForms(setMostrarRegistro) {
  setMostrarRegistro((prev) => !prev);
}

function mostrarFormularioRecuperar() {
  Swal.fire({
    title: 'Recuperar Contraseña',
    html: `
      <input type="email" id="correoRecuperar" class="swal2-input" placeholder="Correo para recuperar contraseña">
      <p id="correoMensaje" class="text-danger text-center"></p>
    `,
    showCancelButton: true,
    confirmButtonText: 'Recuperar',
    preConfirm: () => {
      const correoInput = Swal.getPopup().querySelector('#correoRecuperar');
      const correo = correoInput.value;
      const correoMensaje = Swal.getPopup().querySelector('#correoMensaje');
      const correoPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!correoPattern.test(correo)) {
        correoMensaje.textContent = 'Correo no válido';
        correoInput.classList.add('is-invalid');
        Swal.showValidationMessage('Por favor ingresa un correo válido.');
        return false;
      }

      return correo;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const correo = result.value;
      Swal.fire('Mensaje Enviado', `Se enviará un mensaje a ${correo} con instrucciones para recuperar tu contraseña.`, 'success');
    }
  });
}

function iniciarSesion(setMostrarRegistro) {
  toggleForms(setMostrarRegistro);
}

const LoginForm = () => {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  return (
    <div>
      <form>
        <p>Por favor inicia sesión con tu cuenta</p>
        <div className="form-outline mb-4">
          <input type="email" className="form-control" placeholder="Correo Institucional" />
          <label className="form-label" htmlFor="form2Example11">
            Correo
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" className="form-control" placeholder="Contraseña" />
          <label className="form-label" htmlFor="form2Example22">
            Contraseña
          </label>
        </div>

        <div className="text-center pt-1 mb-5 pb-1">
          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={() => iniciarSesion(setMostrarRegistro)}>
            Iniciar Sesión
          </button>
          <a className="text-muted" href="#!" onClick={mostrarFormularioRecuperar}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>

      {mostrarRegistro && <RegistroForm />}
    </div>
  );
}

export default LoginForm;
