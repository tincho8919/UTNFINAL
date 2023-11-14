
//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//importamos los componentes
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




function App() {
  return (
    <div className="App">
      <header className="App-header">      
      </header>
      <BrowserRouter>

        <Navbar />

        <Routes>
        <Route index element={ <HOMEPRODUCTOS /> }/> 
            <Route path='/home' element={ <HOMEPRODUCTOS />} />
            <Route path='/productos' element={ <Productos />} />
            <Route path='/desarrollador' element={ <CompShowBlogs />} />
            <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} />
            <Route path="/register" element={ <RegisterForm />} />
            <Route path="/login" element={ <LoginForm /> } />
            <Route path='/cargadeproducto' element={ <CompShowProduct />} />
            <Route path='/createproduct' element={ <CompCreateProduct />} />
            <Route path='/editproduct/:id' element={ <CompEditProduct />} />

        </Routes>

        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
