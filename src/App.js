import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistroForm from './components/RegistroForm';
import './scss/styles.css';

const App = () => {
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const toggleForms = () => {
    setMostrarRegistro((prev) => !prev);
  };

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Departamento de bienestar universitario </h4>
                    </div>
                    {mostrarRegistro ? <RegistroForm /> : <LoginForm />}
                    
                    <button className="btn btn-link" onClick={toggleForms}>
                      {mostrarRegistro ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">En el inicio de cada día y de cada página, encuentra la inspiración para escribir tu propia historia extraordinaria.</h4>
                    <p className="small mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
