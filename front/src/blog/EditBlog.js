import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompEditBlog = () => {
    const [nombre, setNombre] = useState('');   
    const [cargo, setCargo] = useState('');
    const [titulo, setTitulo] = useState('');
    const [salario, setSalario] = useState(0);   
    const navigate = useNavigate();
    const { id } = useParams();

    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}${id}`, {
            nombre: nombre,      
            titulo: titulo,
            cargo: cargo,
            salario: salario 
        });
        navigate('/desarrollador');
    };


    useEffect(() => {
        getBlogById();
    }, []);

    const getBlogById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setNombre(res.data.nombre);
        setTitulo(res.data.titulo);
        setCargo(res.data.cargo);     
        setSalario(res.data.salario);
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
                    <label className="form-label">Titulo</label>
                    <textarea
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cargo</label>
                    <input
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salario</label>
                    <input
                        value={salario}
                        onChange={(e) => setSalario(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    );
};

export default CompEditBlog;
