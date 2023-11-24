import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './blog/AuthContext';
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import Navbar from './blog/NavBar';
import Footer from './blog/FooTer';
import HOMEPRODUCTOS from './blog/HomeBlog';
import Productos from './blog/ProducBlog';
import CompShowProduct from './blog/ShowProduct';
import CompCreateProduct from './blog/CreateProduct';
import CompEditProduct from './blog/EditProduct';
import RegisterForm from './blog/RegisterUser';
import LoginForm from './blog/LoginUser';
import User from './blog/User';
import MostrarUsuarios from './blog/showUser';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Tu contenido del encabezado si es necesario */}
      </header>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            {/* Rutas públicas */}
            <Route index element={ <HOMEPRODUCTOS /> }/> 
            <Route path="/home" element={<HOMEPRODUCTOS />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Rutas protegidas que requieren inicio de sesión */}
            <Route
              path="/desarrollador"
              element={<ProtectedRoute element={<CompShowBlogs />} />}
            />
            <Route
              path="/create"
              element={<ProtectedRoute element={<CompCreateBlog />} />}
            />
            <Route
              path="/edit/:id"
              element={<ProtectedRoute element={<CompEditBlog />} />}
            />
            <Route
              path="/cargadeproducto"
              element={<ProtectedRoute element={<CompShowProduct />} />}
            />
            <Route
              path="/createproduct"
              element={<ProtectedRoute element={<CompCreateProduct />} />}
            />
            <Route
              path="/editproduct/:id"
              element={<ProtectedRoute element={<CompEditProduct />} />}
            />
            <Route
              path="/user"
              element={<ProtectedRoute element={<User />} />}
            />
            <Route
              path="/all-users"
              element={<ProtectedRoute element={<MostrarUsuarios />} />}
            />
            <Route
              path="/ruta-protegida"
              element={<ProtectedRoute element={<MostrarUsuarios />} />}
            />

            
            <Route
              path="/home"
              element={<Navigate to={useAuth().isAuthenticated ? '/home' : '/login'} />}
            />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
