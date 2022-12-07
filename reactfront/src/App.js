import './App.css';
//importamos los componentes
import CompShowProductos from './producto/ShowProducto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateProducto from './producto/CreateProducto';
import CompEditProducto from './producto/EditProducto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<CompShowProductos/>}/>
          <Route path='/create' element ={<CompCreateProducto/>}/>
          <Route path='/edit/:id' element ={<CompEditProducto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
