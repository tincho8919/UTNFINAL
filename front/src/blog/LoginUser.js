import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST al servidor para iniciar sesión usando Axios
      const response = await axios.post('http://localhost:8000/blogs/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Inicio de sesión exitoso, puedes redirigir al usuario o hacer otra acción
        console.log('Inicio de sesión exitoso');
        // Por ejemplo, puedes redirigir al usuario a la página principal
        navigate('/');
      } else {
        // Manejar otros casos, como credenciales incorrectas
        console.error('Credenciales incorrectas');
      }
    } catch (error) {
      // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error al usuario
      console.error('Error en la solicitud de inicio de sesión:', error);
    }
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={handleLogin} style={{ height: '600px' }}>
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
      <p>
        No tienes cuenta? <Link to="/register">Register</Link>
      </p>
      </form>
    </div>
  );
};

export default LoginForm;

