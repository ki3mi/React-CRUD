import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/productos/'

const CompEditProducto = () =>{
    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [seccion, setSeccion] = useState('')
    // const [imagen, setimagen] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    //procedimiento para actualizar 
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            codigo: codigo, 
            nombre: nombre, 
            seccion: seccion, 
            /*imagen: imagen*/
        })
        navigate('/')
    }
    useEffect(()=>{
        getProductoById()
    },[])

    const getProductoById = async ()=>{
        const res = await axios.get(URI+id)
        setCodigo(res.data.codigo)
        setNombre(res.data.nombre)
        setSeccion(res.data.seccion)
        // setimagen(res.data.imagen)
    }
    return(
        <div>
            <h3>Editar producto</h3>
            <form onSubmit={update}>
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
export default CompEditProducto