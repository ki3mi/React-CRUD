import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/productos/'

const CompShowProductos = () =>{
    const [ productos, setProducto ] = useState([])
    const [ search, setSearch ] = useState("")

    

    //Procedimiento para mostrar todos los productos
    const getProductos = async () =>{
        const res = await axios.get(URI)
        setProducto(res.data)
    }

    //Procedimiento para eliminar los productos
    const deleteProducto = async (id)=>{
        await axios.delete(`${URI}${id}`)
        getProductos()
    }

    // funcion de busqueda
    const searcher = (e) =>{
        setSearch(e.target.value)
        // console.log(e.target)
    }
    
    //Metodo de filtrado
    let results = []
    if(!search)
    {
        results = productos
    }
    else{
        results = productos.filter((dato)=>
        dato.nombre.toLowerCase().includes(search.toLowerCase())
        ) 
    }
    useEffect(()=>{
            getProductos()
        },[])

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='form-control mt-3 mb-5'/>                 
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>ID</th>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Sección</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map ((producto)=>(
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
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
                    <Link to={`/create/`} className='btn btn-primary mt-2 mb-2'>Agregar</Link>
                </div>
            </div>
        </div>
    )
}
export default CompShowProductos