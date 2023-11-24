import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import { useAuth } from './AuthContext'; // Importa el contexto

const MostrarUsuarios = () => {
  const [users, setUsers] = useState([]);
  const { logout } = useAuth(); // Obtén la función logout del contexto

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auth/all-users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLogout = () => {
    logout();
    
  };

  return (
    <div className="container mt-4" style={{ minHeight: '80vh' }}>
      <h1 className="mb-4 text-center">Bienvenido, Login Exitoso</h1>
      <h3 className="mb-4">TIENES ACCESO A: *USER *USER MYD *CARGA DE PRODUCTOS *DESARROLLADORES </h3>
      <Button variant="danger" onClick={handleLogout} className="mb-4">
        Cerrar Sesión
      </Button>
      <h1 className="mb-4">Información de Usuarios</h1>
      <Table striped bordered hover responsive>
        <tbody>
          {users.map((user) => (
            <React.Fragment key={user._id}>
              <tr>
                <td>ID:</td>
                <td>{user._id}</td>
              </tr>
              <tr>
                <td>Nombre:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.email}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MostrarUsuarios;






