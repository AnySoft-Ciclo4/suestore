const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true, // eliminar espacios en blanco al inicio y al final
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres"]
    },
    precio:{
        type:Number,
        required:[true,"Por favor registre el precio del producto"],
        maxLength:[8, "El precio del producto no puede estar por encima  de 99'999.999"],
        default:0.0
    },
    descripcion:{
        type:String,
        required:[true,"Por favor ingrese la descripción del producto."]
    },
    calificacion:{
        type:Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto"],
        enum:{
            values:[
                "Camisas",
                "Camisetas",
                "Buzos",
                "pantalones",
                "jeans",
                "pantalonetas"
            ]
        }
    },
    inventario:{
        type:Number,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opiniones:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            reating:{
                type:Number,
                required:true
            },
            comentarios:{
                type:String,
                required:true,
                maxLength:[250,"Los comentarios no pueden exceder los 250 caracteres"]
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("productos",productosSchema)