// importar el modelo
import ProductosModel from "../models/ProductModel.js";

// Metodos para el crud

//Mostrar todos los productos
export const getAllProductos =async (req, res) => {
    try {
        const productos = await ProductosModel.findAll()
        res.json(productos)
    } catch (error) {
        res.json({error: error.message})
    }
}
// Mostrar un producto
export const getProducto = async (req, res)=>{
    try {
        const producto = await ProductosModel.findAll({where:{id:req.params.id}
        })
        res.json(producto[0])
    } catch (error) {
        res.producto({massage: error.message})
    }
}
//Agregar un producto
export const createProducto = async (req, res) =>{
    try {
        await ProductosModel.create(req.body)
        res.json({
            "message":"!Producto agregado correctamente¡"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//Actualizar producto
export const updateProducto = async (req, res)=>{
    try {
        await ProductosModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "message":"!Producto actualizado correctamente¡"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}
//eliminar un registro
export const deleteProducto = async (req, res) => {
    try {
        await ProductosModel.destroy({
            where: {id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}