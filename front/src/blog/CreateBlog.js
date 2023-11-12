import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompCreateBlog = () => {
    const [nombre, setNombre] = useState('');   
    const [cargo, setCargo] = useState('');
    const [titulo, setTitulo] = useState('');
    const [salario, setSalario] = useState(0);     
    const navigate = useNavigate();

    // Procedimiento para guardar
    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {
            nombre: nombre,      
            titulo: titulo,
            cargo: cargo,
            salario: salario     
        });
        navigate('/desarrollador');
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
                    <label className='form-label'>Titulo</label>
                    <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Cargo</label>
                    <textarea
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Salario</label>
                    <input
                        value={salario}
                        onChange={(e) => setSalario(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Store
                </button>
            </form>
        </div>
    );
};

export default CompCreateBlog;


