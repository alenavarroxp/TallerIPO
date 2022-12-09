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
        tipo:"Enroscable" ,
        precio:30.50,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:40.19,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:40.49,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:40.89,
    },
    {
        marca:"Axion23",
        imagen:require('../assets/objetos/montonRuedas.png'),
        modelo:"Axion23",
        tipo:"Invierno" ,
        precio:40.99,
    },
    
]

