import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const MostrarUsuarios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/auth/all-users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-4" style={{ height: '600px' }}>
      <h1 className="mb-4">Información de Usuarios</h1>
      <Table striped bordered hover responsive>
        <tbody>
          {users.map(user => (
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





