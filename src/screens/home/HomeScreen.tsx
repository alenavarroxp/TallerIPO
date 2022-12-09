import { View,Text,StyleSheet, Image, TextInput, Alert, TouchableOpacity, FlatList} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import React, { useEffect, useRef, useState } from 'react'
import Svg from 'react-native-svg'
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants'
import { NeumaticosScreen } from ".."
import { listaObjetos } from "../../constants/objetos"
import { AirbnbRating  } from 'react-native-ratings';

const LLAVE_IMAGE = require('../../assets/objetos/llave.png')

const HomeScreen = () => {
  const [region, setRegion] = useState({
    latitude: 38.988266, 
    longitude:  -1.861976,
    latitudeDelta: 0.07,
    longitudeDelta: 0.07,
  });
  
  const [contenido,setContenido ] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image style={{margin:10,marginBottom:20,width:100,height:50}} source={require('../../assets/coche.png')} />
         <Text style={{fontSize:20}}>TallerIPO</Text>
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
        <Text style={{fontSize:20,marginBottom:10}}>Puedes encontrarnos en:</Text>
        <View style={{width:'100%',height:350,borderRadius:20,backgroundColor:'#FFB660',alignItems:'center'}}>
          <MapView style={styles.map} initialRegion={region} region={region}>
                <Marker
                  coordinate={{
                  latitude: 38.97873523731518,
                  longitude:  -1.856899295429737
                  }}
                  title="TallerIPO"
                  description="¡Aquí estamos!"
                  
                  />
           </MapView>
          
        </View>
        
      </View>
        :
       <View>
        <FlatList 
        numColumns={2}
        contentContainerStyle={{alignItems:'center'}}
        data={listaObjetos}
        renderItem={({item})=>{
          return(
           
              <View style={styles.cardContainer}>

                <Image style={{width:80,height:80,marginVertical:10}} source={item.imagen} /> 

                <View style={styles.cardTitle}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{marginBottom:10}}>  
                      <Text style={{fontSize:12}}>Marca: {item.marca}</Text>
                      <Text style={{fontSize:12}}>Modelo: {item.modelo}</Text>
                      <Text style={{fontSize:12}}>Tipo: {item.tipo}</Text>
                    </View>
                    
                    <Text style={{fontSize:16,fontWeight:'600',marginStart:17}}>{item.precio.toFixed(2)}€</Text>
                  </View>

                  <AirbnbRating 
                  starImage={LLAVE_IMAGE}
                  count={5}
                  size={20}
                  showRating={false}
                  isDisabled={true}
                  defaultRating={4}
                  selectedColor={'#f1c40f'}
                  />

                </View>
              </View>
            
            
          )
        }} />

      </View>
      }
        
        
      

    </View>
  )
}
HomeScreen.defaultProps = {
  markers: [],
};

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
  
 }, 
  map: {
    width: '100%',
    height: '100%',
  },

  //* Tarjetas
  cardContainer:{
    
    alignItems:'center',
    backgroundColor:'#D9D9D9',
    borderRadius: 12,
    margin:5
  },
  cardTitle:{
    borderRadius:10,
    padding:5,
    backgroundColor:'white',
  }

})