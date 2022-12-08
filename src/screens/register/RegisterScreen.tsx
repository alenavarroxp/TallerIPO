import { useEffect, useState } from "react";
import { View,Text,StyleSheet, Image, TextInput, Alert, TouchableOpacity} from "react-native"
import {Input,Button} from 'native-base'
import { useNavigation } from "@react-navigation/native";
import Constants from 'expo-constants'
import { LoginScreen } from "..";

const RegisterScreen = () =>{

    
    const navigator = useNavigation<any>();
    const [userR,setUserRegister] = useState<any>({uid: "",email: "",displayName: "",groups: []});
    const [password,setPassword] = useState('');

    return(

        

        
        <View style={styles.loginView} >
            <View style={styles.principal}>
                <Image style={{margin:20}} source={require('../../assets/coche.png')} />
                <Text style={{fontSize:27,marginBottom:5}}>¡Bienvenido!</Text>
                <Text style={{fontSize:15,width:179,alignSelf:'center',marginBottom:10}}>¡Rellena los siguientes campos para registrarte!</Text>
            </View>

            <View style={styles.viewInputs}>
                <Text style={{marginBottom:5}}>Nombre de usuario (*)</Text>
                <Input borderColor={"black"} borderRadius={20} borderWidth={2} style={styles.inputs} placeholder="Ingrese su nombre de usuario"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text style={{marginBottom:5}}>Correo electrónico (*)</Text>
                <Input borderColor={"black"} borderRadius={20} borderWidth={2} style={styles.inputs} placeholder="Ingrese su correo electrónico"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text style={{marginBottom:5}}>Dirección</Text>
                <Input borderColor={"black"} borderRadius={20} borderWidth={2} style={styles.inputs}  placeholder="Ingrese su dirección"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text style={{marginBottom:5}}>Empresa</Text>
                <Input borderColor={"black"} borderRadius={20} borderWidth={2} style={styles.inputs} placeholder="Ingrese su empresa"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text style={{marginBottom:5}}>Contraseña (*)</Text>
                <Input borderColor={"black"} borderRadius={20} borderWidth={2} style={styles.inputs} placeholder="Ingrese su contraseña"></Input>
            </View>
            
              <Text style={{fontSize:12,margin:20,alignSelf:'center'}} onPress={()=>navigator.navigate('Login')} >¿Ya tienes una cuenta? Iniciar Sesion</Text>

              <Button onPress={()=>navigator.navigate('Home')} style={styles.button} borderRadius={'full'} background={'#FFB660'}>Registrarse</Button>

        </View>
        
    )

  
}
const styles = StyleSheet.create({
    loginView: {
        marginTop:Constants.statusBarHeight,
        backgroundColor: "white",
        flexDirection:'column',
        borderRadius: 20,
        padding: 20,
      }, 
    principal:{
        alignSelf:'center',
        alignItems:'center',
        width:240,
        
    },
    viewInputs:{
        marginTop:10
    },
    inputs:{
        
    },
    button:{
        paddingHorizontal:40,
        paddingVertical:15,
        alignSelf:'center',
        marginVertical:20,
        marginBottom:20,
        fontSize:40,
        width:330,
        height:60

    },
    
});

export default RegisterScreen;