import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log('Datos de inicio de sesión:', { email, password });
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email: email,
        password: password,
      });

      if (response.status === 201) {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        setLoginMessage('Inicio de sesión exitoso.');
        // Guarda el token de sesión si tu backend lo proporciona
        // Redirige al usuario a la página deseada
      } else {
        // Credenciales inválidas
        console.error('Credenciales inválidas');
        console.log();
        setLoginMessage('Credenciales inválidas. Por favor, verifica tu email y contraseña.');
      }
    } catch (error) {
      // Error en la solicitud de inicio de sesión
      console.error('Error en la solicitud de inicio de sesión:', error);
      setLoginMessage('Error en la solicitud de inicio de sesión. Por favor, intenta de nuevo.');
    }finally {
      // Limpiar los campos de entrada después de la acción
      setEmail('');
      setPassword('');}
    
  };



  return (
    <div className="container" style={{ height: '600px' }}>
      <h3>Iniciar Sesión</h3>
      <form onSubmit={handleLogin} >
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
          Login
        </button>
      </form>
      {loginMessage && <div className="alert alert-info">{loginMessage}</div>}
      <p>
        ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
      </p>
    </div>
  );
};

export default LoginForm;




