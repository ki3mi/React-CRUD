//Importamos la conexion ala base de datos
import db from "../database/db.js";
//Importamos equelize
import { DataTypes } from "sequelize";

const ProductoModel =  db.define('productos',{
    nombre:{type: DataTypes.STRING},
    codigo:{type: DataTypes.STRING},
    seccion:{type: DataTypes.STRING},
    imagen:{type: DataTypes.STRING},
})

export default ProductoModel