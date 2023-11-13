// RegisterForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', {
        name: name,
        email: email,
        password: password,
      });
  
      console.log(response);
  
      if (response.status === 200 || response.status === 201) {
        // Registro exitoso
        console.log('Registro exitoso');
        setRegistrationMessage('Registro exitoso. Te llegará un correo con un código.');
  
        // Puedes redirigir al usuario a la página de inicio de sesión aquí si es necesario
        navigate('/login');
      } else {
        // Error en el registro
        console.error('Error en el registro');
        setRegistrationMessage('Error en el registro. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      // Error en la solicitud de registro
      console.error('Error en la solicitud de registro:', error);
  
      // Analizar errores específicos y proporcionar mensajes detallados
      if (error.response && error.response.status === 400) {
        setRegistrationMessage('Error en los datos proporcionados. Asegúrate de que la información sea válida.');
      } else {
        setRegistrationMessage('Error en la solicitud de registro. Por favor, intenta de nuevo.');
      }
    }
  };

  return (
    <div className="container" style={{ height: '600px' }}>
      <h3>Registro</h3>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {registrationMessage && <div className="alert alert-info">{registrationMessage}</div>}
      <p>
        ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
      </p>
    </div>
  );
};

export default RegisterForm;





