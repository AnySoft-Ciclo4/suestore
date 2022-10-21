const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts); //!Establecemos desde que ruta queremos ver el getProducts 
router.route('/producto/nuevo').post(newProduct); //! establecemos la ruta
router.route('/producto/:id').get(getProductById); //! se establece la ruta donde se hace la consulta por ID
router.route('/producto/:id').put(updateProduct); //! ruta para actualizar producto, uso el put para actualizar
router.route('/producto/:id').delete(deleteProduct); //! crear ruta de eliminar por id


module.exports=router;