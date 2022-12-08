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
                <Text>Nombre de usuario (*)</Text>
                <Input style={styles.inputs} placeholder="Ingrese su nombre de usuario"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text>Correo electrónico (*)</Text>
                <Input style={styles.inputs} placeholder="Ingrese su correo electrónico"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text>Dirección</Text>
                <Input style={styles.inputs} placeholder="Ingrese su dirección"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text>Empresa</Text>
                <Input style={styles.inputs} placeholder="Ingrese su empresa"></Input>
            </View>

            <View style={styles.viewInputs}>
                <Text>Contraseña (*)</Text>
                <Input style={styles.inputs} placeholder="Ingrese su contraseña"></Input>
            </View>
            
              <Text style={{fontSize:12,margin:10,alignSelf:'center'}} onPress={()=>navigator.navigate('Login')} >¿Ya tienes una cuenta? Iniciar Sesion</Text>

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
        fontSize:40,
        width:330,
        height:60

    },
    
});

export default RegisterScreen;