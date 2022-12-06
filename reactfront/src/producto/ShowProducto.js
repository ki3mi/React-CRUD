import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/productos/'

const CompShowProductos = () =>{
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        getProductos()
    },[])

    //Procedimiento para mostrar todos los productos
    const getProductos = async() =>{
        const res = await axios.get(URI)
        setProductos(res.data)
    }

    //Procedimiento para eliminar los productos
    const deleteProducto = async (id)=>{
        await axios.delete(`${URI}${id}`);
        getProductos()
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to={`/create/`} className='btn btn-primary mt-2 mb-2'>Agregar</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Sección</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map ((producto)=>(
                                <tr key={producto.id}>
                                    <td>{producto.codigo}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.seccion}</td>
                                    <td>{producto.imagen}</td>
                                    <td>
                                        <Link to={`/edit/${producto.id}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={()=> deleteProducto(producto.id)} className='btn btn-danger'>Borrar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default CompShowProductos