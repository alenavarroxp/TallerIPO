import { useEffect,useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen,HomeScreen,RegisterScreen,NeumaticosScreen,CompraScreen} from 'screens/index';

const Screens = () => {
  const Stack = createNativeStackNavigator<any>();
  
  return (
       <Stack.Navigator>
         <Stack.Screen 
            name="Register"
            component={RegisterScreen}
            options={{
              title: 'Register IPO',
              headerShown:false,
          }}/>

        <Stack.Screen  
             name="Login"
             component={LoginScreen}
             
             options={{
               title: 'Login IPO',
               headerShown:false,
            }}
           />
        
          
         
      
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            
            options={{
            title: 'TallerIPO',
          }}
          />
      
        </Stack.Navigator>
  )
}

export default Screens