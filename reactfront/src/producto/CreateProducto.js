import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/productos/'

const CompCreateProducto = ()=>{
const [codigo, setCodigo] = useState('')
const [nombre, setNombre] = useState('')
const [seccion, setSeccion] = useState('')
// const [imagen, setimagen] = useState('')
const navigate = useNavigate()

//Procedimeinto guardar
const store = async (e) => {
    e.preventDefault()
    await axios.post(URI,{codigo: codigo, nombre: nombre, seccion: seccion, /*imagen: imagen*/})
    navigate('/')
}
    return(
        <div>
            <h3>Agregar producto</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Código: </label>
                    <input 
                        value={codigo}
                        onChange={ (e) => setCodigo(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre: </label>
                    <input 
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Sección: </label>
                        <input 
                            value={seccion}
                            onChange={ (e) => setSeccion(e.target.value)}
                            type="text"
                            className="form-control"
                        />
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Seleccionar Imagen:
                        <input 
                            value={imagen}
                            onChange={ (e) => setimagen(e.target.value)}
                            type="file"
                            className="form-control"
                        />
                    </label>                            
                </div> */}
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    )
}
export default CompCreateProducto