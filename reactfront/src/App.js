import logo from './logo.svg';
import './App.css';
//importamos los componentes
import CompShowProductos from './producto/ShowProducto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompCreateProducto from './producto/CreateProducto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<CompShowProductos/>}/>
          <Route path='/create' element ={<CompCreateProducto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
