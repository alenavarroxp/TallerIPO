import { StyleSheet, Text, View,Image,TouchableOpacity,Linking, Alert } from 'react-native'

import React,{ useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Constants from 'expo-constants'
import { useNavigation,useRoute, } from '@react-navigation/native'
import { objeto } from '../../constants/objetos'
import { AirbnbRating  } from 'react-native-ratings';

type operacion = 'sum' | 'res';

const CompraScreen = () => {
  const [randomNum,setRandomNum] = useState(Math.floor(Math.random() * 1000000) + 1);
  const LLAVE_IMAGE = require('../../assets/objetos/llave.png')
  const route = useRoute<any>();
  const navigator = useNavigation<any>();
  const Objeto:objeto = route.params.item;
  const [counter,setCounter] = useState(1);
  function ComprarAlerta(){
    Alert.alert("Pieza comprada con éxito");
  
  }
  function cambiarCount(tipoOperacion:operacion){
    
    if(tipoOperacion == "res"){
      if(counter == 0) return;
      
      setCounter(c => c-1);
      return;
    }

    if(tipoOperacion == "sum"){
      if(counter == 999) return;
      
      setCounter(c => c+1);
      return;
    }

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>navigator.navigate('Home')} style={styles.back}>
        <Ionicons style={{margin:10}} name="arrow-back" size={30} />
      </TouchableOpacity>
      
      <View style={{marginStart:25,borderRadius:15}}>
        <Text style={{fontSize:20}}>{Objeto.marca}</Text>
        <Text>{Objeto.tipo}</Text>
        <Text style={{color:"#B1AAAA",fontSize:11}}>Número de articulo: {randomNum}</Text>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',marginStart:25}}>
        <Image style={styles.foto} source={Objeto.imagen}/>
        <View>
          <Text style={{fontSize:40,marginStart:20}}>{Objeto.precio.toFixed(2)} €</Text>
          
          <View style={{flexDirection:'row',marginStart:20,alignItems:'center'}}>
            <Text style={[styles.operador,{borderTopStartRadius:10,borderBottomStartRadius:10}]} onPress={()=>cambiarCount("res")}> - </Text>
            <Text style={{fontSize:20,marginHorizontal:15}}>{counter}</Text>
            <Text style={[styles.operador,{borderTopEndRadius:20,borderBottomEndRadius:20}]} onPress={()=>cambiarCount("sum")}> + </Text>
          </View>
        </View>
       
      </View>
      <Text style={{marginStart:25,fontSize:10}}>IVA incl. 21%, gastos de envío no incluidos.</Text>
      <TouchableOpacity style={styles.compra} onPress={()=>ComprarAlerta()}>
        <Ionicons name="cart-outline" size={35} style={{marginStart:10,marginEnd:20,color:'white'}}/>
        <Text style={{color:'white',fontSize:18}}>Compra</Text>
      </TouchableOpacity>
      
      <Text style={{fontSize:20,marginStart:20}}>Características</Text>
      <View>
        <View style={styles.caja}>
          <Text>Tipo:</Text>
          <Text>{Objeto.tipo}</Text>
        </View>
        
        <View style={[styles.caja,{backgroundColor:'white'}]}>
          <Text>Modelo:</Text>
          <Text>{Objeto.modelo}</Text>
        </View>
        
        <View style={styles.caja}>
          <Text>Nuestro precio:</Text>
          <Text>{Objeto.precio}</Text>
        </View>
      </View>
      
      <Text style={{fontSize:18,marginStart:20,marginTop:20}}>Valoración:</Text>
      <AirbnbRating 
                  starContainerStyle={{marginTop:20}}
                  starImage={LLAVE_IMAGE}
                  count={5}
                  size={35}
                  showRating={false}
                  isDisabled={true}
                  defaultRating={4}
                  selectedColor={'#f1c40f'}
      />
      
      

     
      <Text style={{margin:20,fontSize:11,marginTop:70,color:'#B1AAAA'}}>Términos y Condiciones usa tus datos para
        responder tu consulta y llevar un control de las mismas. 
        Puedes ejercer tus derechos de acceso o supresión, entre otros,
      según indican nuestras <Text style={{textDecorationLine:'underline'}} onPress={()=>{Linking.openURL("https://images.pexels.com/photos/1339845/pexels-photo-1339845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}}>Condiciones de Uso y Privacidad.</Text></Text>
    </View>
  )
}

export default CompraScreen

const styles = StyleSheet.create({

  container:{
    marginTop:Constants.statusBarHeight,    
    flex:1,
},
back:{
  
},
foto:{
  width:150,
  height:150,
},
operador:{
  backgroundColor:'#FFF3ED',
  padding:10,
  fontSize:20,
  alignItems:'center',
  justifyContent:'center'
},
compra:{
 backgroundColor:'#B60615',
 borderRadius:10,
 width:150,
 height:50,
 flexDirection:'row',
 alignItems:'center',
 marginTop:20,
 marginEnd:20,
 alignSelf:'flex-end'
  
},
caja:{
  height:40,
  marginHorizontal:20,
  alignItems:'center',
  backgroundColor:'#FFF3ED',
  flexDirection:'row',
  padding:5,
  justifyContent:'space-between'
},
})