
const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url))//* Usurpación del required

//** Ver la lista de productos
exports.getProducts=async(_req,res,_next) =>{
    const productos= await producto.find();
    res.status(200).json({
        success:true,
        count: productos.length,
        productos
    })
}

//* Ver productos por id
exports.getProductById=async(req,res,next) =>{
    const productPorId= await producto.findById(req.params.id);
    if (!productPorId){
        return res.status(404).json({
           success:false,
           message: "No encontramos ese producto" 
        })
    }
    res.status(200).json({
        success:true,
        message:"Aquí abajo encuentras información sobre tu producto",
        productPorId
    })
}

//* Update productos
exports.updateProduct=async(req,res,next) =>{
    let productPorId= await producto.findById(req.params.id)//* Let: Variable modificable
    if (!productPorId){ //* Valido que el objeto no exista y finaliza el proceso
        return res.status(404).json({
           success:false,
           message: "No encontramos ese producto" 
        })
    }
    //* Si el objeto existe, entonces ejecuta la actualización
    productPorId= await producto.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    //* Respondo con un ok se el producto se actualizó
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        productPorId
    })
}

//* crear nuevo producto /api/productos
exports.newProduct=async (req,res,next)=>{
    const product= await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//*Eliminar un producto

exports.deleteProduct=async(req,res,next) =>{
    const productPorId= await producto.findById(req.params.id)
    if (!productPorId){ //* Valido que el objeto no exista y finaliza el proceso
        return res.status(404).json({
           success:false,
           message: "No encontramos ese producto" 
        })
    }
    await productPorId.remove();
    res.status(200).json({
        success:true,
        message:"El producto se elimino correctamente",
    })
}


//* cosas con FETCH
//*Ver todos los productos
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//* verProductos();   llamamos al metodo creado para probar la consulta

//*Ver por id

function verById(){
    fetch('http://localhost:4000/api/productos/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//* verById(id);  llamamos al metodo creado para probar la consulta por id




