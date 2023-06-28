import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import RepositoriosPage from "./src/home/repositorios-page";
import HomePage from "./src/home/home-page";

import ReposPage from "./src/home/repos-page";



export default function App(){

    const Stack = createNativeStackNavigator();

       
    
    return(
        <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="home" component={HomePage}  options={{
          title: 'GIT',
          headerStyle: {
            backgroundColor: 'rgb(1,4,9)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Details" component={RepositoriosPage} options={{
          title: 'Repository',
          headerStyle: {
            backgroundColor: 'rgb(1,4,9)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
          <Stack.Screen name="repos" component={ReposPage} options={{
          title: 'Repositorio',
          headerStyle: {
            backgroundColor: 'rgb(1,4,9)',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
         
        </Stack.Navigator>
      </NavigationContainer>
 
    );
}