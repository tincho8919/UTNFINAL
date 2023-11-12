import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/product/';

const CompEditProduct = () => {
    const [nombre, setNombre] = useState('');   
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [descripcion, setDescripcion] = useState('');   
    const navigate = useNavigate();
    const { id } = useParams();

    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, {
            nombre: nombre,      
            precio: precio,
            stock: stock,
            descripcion : descripcion 
        });
        navigate('/cargadeproducto');
    };


    useEffect(() => {
        getproductById();
    }, []);

    const getproductById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setNombre(res.data.nombre);
        setPrecio(res.data.precio);
        setStock(res.data.stock);     
        setDescripcion(res.data.descripcion);
    };

    return (
        <div>
            <h3>Edit POST</h3>
            <form onSubmit={update} style={{ height: '600px' }}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Precio</label>
                    <textarea
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Editar
                </button>
            </form>
        </div>
    );
};

export default CompEditProduct;
