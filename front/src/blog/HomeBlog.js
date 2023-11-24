import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ProductCard = ({ nombre, imagen, precio, detalles }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const toggleMensaje = () => {
    setMostrarMensaje(!mostrarMensaje);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '100%', margin: '10px' }}>
        <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title className='text-center'>{nombre}</Card.Title>
          <Card.Text className='text-center'>Precio: {precio}</Card.Text>
          <Button variant="primary" className="mostrar-detalles mx-auto d-block" onClick={toggleDetalles}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
          </Button>
          {mostrarDetalles && (
            <div className="detalles-hidden text-center">
              <p>Detalles: {detalles}</p>
            </div>
          )}
          <div className="m-3 text-center">
            <Button variant="primary" onClick={toggleMensaje}>
              Comprar
            </Button>
            {mostrarMensaje && (
              <div className="mensaje-producto">
                <p>¡Compra realizada! Gracias por adquirir {nombre}.</p>
                <Button variant="outline-primary" onClick={toggleMensaje}>
                  Cerrar
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const HOMEPRODUCTOS = () => {
  return (
    <Container>
      <Row>
        <ProductCard
          nombre="PC M-50"
          imagen="/imagenes/img01.webp"
          precio="$537900.99"
          detalles="Alta calidad de imagen."
        />
        <ProductCard
          nombre="PC-V20"
          imagen="/imagenes/img02.jpeg"
          precio="$854000.99"
          detalles="Buen rendimiento."
        />
        <ProductCard
          nombre="PC-J60"
          imagen="/imagenes/im03.jpeg"
          precio="$687000.99"
          detalles="Super practica."
        />
        <ProductCard
          nombre="PC-F40"
          imagen="/imagenes/img04.jpeg"
          precio="$737900.99"
          detalles="Ideal para todo."
        />
        <ProductCard
          nombre="PC-K70"
          imagen="/imagenes/img05.jpeg"
          precio="$837900.99"
          detalles="Gran capacidad."
        />
        <ProductCard
          nombre="PC-L4"
          imagen="/imagenes/img06.jpeg"
          precio="$247800.99"
          detalles="Alta gamma."
        />
        <ProductCard
          nombre="PC-R2"
          imagen="/imagenes/img07.png"
          precio="$947800.99"
          detalles="Sonido ultra."
        />
        <ProductCard
          nombre="PC-F8"
          imagen="/imagenes/img08.jpeg"
          precio="$747800.99"
          detalles="Muy resistente a golpes."
        />
      </Row>
    </Container>
  );
};

export default HOMEPRODUCTOS;



