import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/product';

const CompCreateProduct = () => {
    const [nombre, setNombre] = useState('');   
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [descripcion, setDescripcion] = useState('');     
    const navigate = useNavigate();

    // Procedimiento para guardar
    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            nombre: nombre,      
            precio: precio,
            stock: stock,
            descripcion: descripcion   
        });
        navigate('/cargadeproducto');
    };

    return (
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store} style={{ height: '600px' }}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <textarea
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Descripcion</label>
                    <input
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Crear
                </button>
            </form>
        </div>
    );
};

export default CompCreateProduct;