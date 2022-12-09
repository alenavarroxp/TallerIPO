import { ImageSourcePropType } from "react-native"

export interface objeto{
    marca:string
    modelo:string
    tipo:string,
    precio:number,
    imagen:ImageSourcePropType
}

export const listaObjetos:Array<objeto> = [
    {
       marca:"RIDEX",
       imagen: require('../assets/objetos/filtro.png'),
       modelo:"Filtro S41",
       tipo:"Enroscable" ,
       precio:19.99,
    },
    {
        marca:"Puerta Verde",
        imagen:require('../assets/objetos/puerta.png'),
        modelo:"C-29",
        tipo:"Chapa" ,
        precio:30.99,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:40.39,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:46.99,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:60.15,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:80.79,
    },
    
    
]

