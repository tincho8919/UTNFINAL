// User.js
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const User = () => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdateUser = () => {
    axios.put(`http://localhost:8000/api/auth/update/${userId}`, {
      name,
      email,
      password,
    })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  const handleDeleteUser = () => {
    axios.delete(`http://localhost:8000/api/auth/delete/${userId}`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div style={{ height: '600px' }}>
      <h1 className="mb-4">Actualizar o Eliminar Usuario</h1>
      <Form>
        <Form.Group controlId="userId">
          <Form.Label>ID del Usuario</Form.Label>
          <Form.Control type="text" value={userId} onChange={handleUserIdChange} />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Nuevo Nombre</Form.Label>
          <Form.Control type="text" value={name} onChange={handleNameChange} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Nuevo Correo Electrónico</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Nueva Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleUpdateUser}>
          Actualizar Usuario
        </Button>
        <Button variant="danger" className="ml-2" onClick={handleDeleteUser}>
          Eliminar Usuario
        </Button>
      </Form>
      {message && <Alert variant="info" className="mt-3">{message}</Alert>}
    </div>
  );
};

export default User;



