import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST al servidor para registrar al usuario usando Axios
      const response = await axios.post('http://localhost:8000/blogs/register', {
        firstName: firstName,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        // Registro exitoso, puedes redirigir al usuario o hacer otra acción
        console.log('Registro exitoso');
        // Por ejemplo, puedes redirigir al usuario a la página de inicio de sesión
        // Usando el enrutador de React-Router
        navigate('/login'); // Asegúrate de importar useNavigate desde 'react-router-dom'
      } else {
        // Manejar otros casos, como errores del servidor
        console.error('Error en el registro');
      }
    } catch (error) {
      // Manejar errores de la solicitud, por ejemplo, mostrar un mensaje de error al usuario
      console.error('Error en la solicitud de registro:', error);
    }
  };

  return (
    <div className="container">
      <h3>Register</h3>
      <form onSubmit={handleRegister} style={{ height: '600px' }}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
      <p>
        Ya tienes una cuenta? <Link to="/login">Login</Link>
      </p>
      </form>
    </div>
  );
};

export default RegisterForm;



