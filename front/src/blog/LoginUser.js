import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud al servidor para la autenticación
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      });

      if (response.status === 201) {
        // Simulamos una respuesta exitosa para el ejemplo
        setLoginMessage('Inicio de sesión exitoso.');
        login(); // Llamamos a la función login del contexto
        navigate('/ruta-protegida'); // Redirigir a una ruta protegida después del inicio de sesión
      } else {
        // Manejar el caso en que las credenciales son inválidas
        setLoginMessage('Credenciales inválidas. Por favor, verifica tu email y contraseña.');
      }
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
      setLoginMessage('Error en la solicitud de inicio de sesión. Inténtalo de nuevo más tarde.');
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










