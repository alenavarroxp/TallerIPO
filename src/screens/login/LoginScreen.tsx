import { Image,StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {Input,Button,Slide,Alert,Text as TextNat} from 'native-base'
import Constants from 'expo-constants'
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

    const [user,setUser]= useState({nombre:'',password:''});
    const [error,setError] = useState(false);
    const navigator = useNavigation<any>();

    function login(){
        if(user.nombre.trim() == '' ||user.password.trim() == ''){
            setError(true);
            return;
        }

        navigator.navigate('Home');
    }

    useEffect(()=>{

        if(error){
            setTimeout(()=>{
                setError(false);
            },3800)
        }

    },[error])

  return (
    
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/coche.png')} />
        <Text style={styles.title}>¡Hola de nuevo!</Text>
        <Text style={styles.subtitle}>¡Bienvenido, te hemos echado de menos!</Text>  

        
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Nombre de usuario</Text>
            <Input onChangeText={(text)=>{setUser({...user,nombre:text})}} borderColor={'black'} placeholder="Ingrese su nombre de usuario" alignSelf={'flex-start'}  borderRadius={20} borderWidth={2}    />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Contraseña</Text>
            <Input onChangeText={(text)=>{setUser({...user,password:text})}} placeholder="Ingrese su contraseña"  borderRadius={20} borderWidth={2} borderColor={"black"}   />
        </View>
        

        <Button onPress={login} style={styles.button} borderRadius={'full'} background={'#FFB660'}>Iniciar sesión</Button>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:15}}>
            <View style={styles.line}/>
            <Text style={{marginHorizontal:10}}>o continuar con</Text>
            <View style={styles.line}/>
        </View>

        <Image style={{marginVertical:20,alignSelf:'center',height:40,width:40}} source={require('../../assets/google.png')} />

        <Slide in={error} placement="top">
        <Alert justifyContent="center" status="error" safeAreaTop={8}>
          <Alert.Icon />
          <TextNat color="error.600" fontWeight="medium">
            Rellene todos los campos 
          </TextNat>
        </Alert>
      </Slide>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        marginTop:Constants.statusBarHeight,
        paddingHorizontal:30,
    },

    image:{
        marginTop:80,
        width:150,
        height:70,
        alignSelf:'center',
    },

    title:{
        fontSize:25,
        alignSelf:'center',
    },
    subtitle:{
        marginBottom:25,
        fontSize:16,
        alignSelf:'center',
        width:160,
        textAlign:'center',
    },

    inputContainer:{
        marginTop:10,
        marginBottom:10,
    },

    inputText:{
        fontSize:15,
        fontWeight:'600',
        marginBottom:5,
    },
    line:{
        flex:1,
        height:1,
        backgroundColor:'#FFB660'
    },
    button:{
        paddingHorizontal:40,
        paddingVertical:15,
        alignSelf:'center',
        marginVertical:20,
        fontSize:18,
    }



})