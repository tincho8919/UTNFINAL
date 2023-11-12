import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const URI = 'http://localhost:8000/product/';

const CompShowProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const res = await axios.get(URI);
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${URI}${id}`);
    getProduct();
  };


  return (
    <div className="container mt-4" style={{ height: 'auto' }}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product._id} className="col">
            <Card>
              <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Precio: {product.precio}</Card.Subtitle>
                <Card.Text>
                  <strong>Stock:</strong> {product.stock} <br />
                  <strong>Descripción:</strong> {product.descripcion}
                </Card.Text>
                <Link to={`/editproduct/${product._id}`} className="btn btn-success btn-sm mr-2">
                  <i className="fas fa-edit"></i> Editar
                </Link>
                <Button variant="danger" size="sm" onClick={() => deleteProduct(product._id)}>
                  <i className="fas fa-trash-alt"></i> Borrar
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      <Link to="/createproduct" className="btn btn-dark mb-2">
        <i className="fas fa-plus"></i> Crear Producto
      </Link>
      </div>
    </div>
  );
};

export default CompShowProduct;
