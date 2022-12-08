import { View,Text,StyleSheet, Image, TextInput, Alert, TouchableOpacity, FlatList} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import React, { useState } from 'react'
import Svg from 'react-native-svg'

import Constants from 'expo-constants'
import { NeumaticosScreen } from ".."
import { listaObjetos } from "../../constants/objetos"


const HomeScreen = () => {

  const [contenido,setContenido ] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image style={{margin:10,marginBottom:20,width:100,height:50}} source={require('../../assets/coche.png')} />
        <Text>TallerIPO</Text>
        <View style={{flexDirection:'row',margin:20}}>
        <Ionicons name="cart-outline" size={35} style={{marginEnd:20}}/>
        <Feather name="user" size={30}/>
        </View>
      </View>

      <View style={styles.options} >
        <TouchableOpacity activeOpacity={0.7} onPress={()=>setContenido(!contenido)} style={{margin:7,marginStart:15,alignItems:'center',backgroundColor: contenido ? '#FFB660':'#E9942F'}} >
          <Image style={{margin:10,width:30,height:31}} source={require('../../assets/ruedadef.png')} />
          <Text style={{color:'white',marginTop:-7}}>Neumaticos</Text>
        </TouchableOpacity>

        <View style={{margin:7,alignItems:'center'}}>
          <FontAwesome5 name="tools" color='white' size={28}/>
          <Text style={{color:'white',marginTop:8}}>Herramientas</Text>
        </View>
        

        <View style={{margin:7,alignItems:'center'}}>
          <MaterialCommunityIcons name="engine" color='white' size={35}/>
          <Text style={{color:'white'}}>Motores</Text>
        </View>

        <View style={{margin:7,alignItems:'center'}}>
          <Ionicons name="car-sport" color={"white"} size={35} />
          <Text style={{color:'white',marginTop:-2}}>Venta Coche</Text>
        </View>
        
      </View>
      
      
      {/* Contenido */}
      {contenido ? 
      <View style ={{alignItems:'center'}}>
        <Image style={{width:'100%',height:235,marginHorizontal:5,marginBottom:20}} source={require('../../assets/homeImage.png')}/>
        <Text style={{fontSize:20,marginBottom:10}}>Encuentranos en:</Text>
        <View style={{width:'100%',height:350,borderRadius:20,backgroundColor:'#FFB660',alignItems:'center'}}>
          <Text style={{marginVertical:145}}>
            PONER API CON MAPITA
          </Text>
        </View>
        
      </View>
        :
       <View>
        <FlatList data={listaObjetos}
        renderItem={({item})=>{
          return(
            <View>
              
              <View>
                <Text>Marca: {item.marca}</Text>
                <Text>Modelo: {item.modelo}</Text>
                <Text>Tipo: {item.tipo}</Text>
              </View>
            </View>
          )
        }} />

      </View>
      }
        
        
      

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    marginTop:Constants.statusBarHeight,    
},
 headerView:{
  backgroundColor:'white',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between'
 },

 options:{
  backgroundColor:'#FFB660',
  width:'100%',
  height:70,
  alignItems:'center',
  flexDirection:"row"
 },
 seleccion:{
  backgroundColor:'#E9942F',
  
 }
})