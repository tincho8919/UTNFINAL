import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const res = await axios.get(URI);
        setBlogs(res.data);
    };

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`);
        getBlogs();
    };

    return (
        <div className="container mt-4" style={{ minHeight: '80vh' }}>
            <Link to="/create" className="btn btn-primary mb-2">
                <i className="fas fa-plus"></i> Add
            </Link>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Titulo</th>
                            <th>Cargo</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index) => (
                            <tr key={blog._id}>
                                <td>{blog.nombre}</td>
                                <td>{blog.titulo}</td>
                                <td>{blog.cargo}</td>
                                <td>{blog.salario}</td>
                                <td>
                                    <Link to={`/edit/${blog._id}`} className="btn btn-info btn-sm mr-2">
                                        <i className="fas fa-edit"></i> Edit
                                    </Link>
                                    <button onClick={() => deleteBlog(blog._id)} className="btn btn-danger btn-sm">
                                        <i className="fas fa-trash-alt"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompShowBlogs;

