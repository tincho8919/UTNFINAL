// LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log('Datos de inicio de sesión:', { email, password });
      // Realizar la solicitud al servidor para la autenticación si es necesario

      // Simulamos una respuesta exitosa para el ejemplo
      setLoginMessage('Inicio de sesión exitoso.');
      login(); // Llamamos a la función login del contexto
      navigate('/ruta-protegida'); // Redirigir a una ruta protegida después del inicio de sesión
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
      setLoginMessage('Credenciales inválidas. Por favor, verifica tu email y contraseña.');
    } finally {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container" style={{ minHeight: '80vh' }}>
      <h3>Iniciar Sesión</h3>
      <form onSubmit={handleLogin}>
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





