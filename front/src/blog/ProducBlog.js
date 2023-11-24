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
          <Button variant="success" className="mostrar-detalles mx-auto d-block" onClick={toggleDetalles}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
          </Button>
          {mostrarDetalles && (
            <div className="detalles-hidden text-center">
              <p>Detalles: {detalles}</p>
            </div>
          )}
          <div className="m-3 text-center">
            <Button variant="success" onClick={toggleMensaje}>
              Comprar
            </Button>
            {mostrarMensaje && (
              <div className="mensaje-producto">
                <p>¡Compra realizada! Gracias por adquirir {nombre}.</p>
                <Button variant="outline-success" onClick={toggleMensaje}>
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

const Productos = () => {
  return (
    <Container>
      <Row>
        <ProductCard
          nombre="Mouse"
          imagen="/artimagenes/1.jpeg"
          precio="$20.99"
          detalles="Totalmente flexible."
        />
        <ProductCard
          nombre="Camara web"
          imagen="/artimagenes/2.jpeg"
          precio="$38.99"
          detalles="Ideal gran calidad de gráfica."
        />
        <ProductCard
          nombre="Teclado"
          imagen="/artimagenes/3.jpeg"
          precio="$22.99"
          detalles="Excelente con luz interna."
        />
        <ProductCard
          nombre="Parlantes"
          imagen="/artimagenes/4.jpeg"
          precio="$40.99"
          detalles="Sonido envolvente calidad alta."
        />
        <ProductCard
          nombre="Audífonos"
          imagen="/artimagenes/5.jpeg"
          precio="$34.99"
          detalles="Sonido fluido con micrófono."
        />
        <ProductCard
          nombre="Audífonos"
          imagen="/artimagenes/6.jpeg"
          precio="$37.99"
          detalles="Excelente sonido con micrófono."
        />
        <ProductCard
          nombre="Teclado"
          imagen="/artimagenes/7.jpeg"
          precio="$19.99"
          detalles="Teclas super flexibles."
        />
        <ProductCard
          nombre="Parlantes"
          imagen="/artimagenes/8.jpeg"
          precio="$41.99"
          detalles="Calidad de sonido de gamma alta."
        />
      </Row>
    </Container>
  );
};

export default Productos;

